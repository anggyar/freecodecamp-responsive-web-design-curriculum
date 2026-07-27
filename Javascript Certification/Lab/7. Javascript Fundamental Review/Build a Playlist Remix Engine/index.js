/** PLAYLIST REMIX ENGINE
 * What i know so far from the instructions:
 *
 * Goals: program that creates a single remix playlist from multiplle playlist submitted by listeners (us maybe?)
 *
 * Listener provides a list of songs.
 *
 * Songs maybe appear more than once.
 * Some artist may show up too many times.
 *
 * Our Job:
 * 1. Combine into one list.
 * 2. Score each song.
 * 3. Remove duplicate songs.
 * 4. Limit how often the same artist appears.
 * 5. Create a final play order.
 *
 */

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

/**
 * User Stories #1
 * 1. Buat fungsi flattenPLaylists(playlistsArr).
 * 2. playlistsArr merupakan array dengan banyak playlist, dimana setiap playlist adalah array dari object dengan ketentuan:
 * obj = {
 *  trackId: "",
 *  artist: "",
 *  title: "",
 *  votes: "",
 *  bpm: ""
 * }
 * 3. Kalau input bukan array, flattenPlaylist harus return array kosong ([];)
 *
 * #2
 * 1. flattenPlaylists harus return flat array dari object track
 * 2. Setiap object memasukkan semua track original + property source
 * 3. properti source merupakan array dengan playlist index dan track index yang menunjukkan asal dari track tersebut.
 *
 */
function flattenPlaylists(playlistsArr) {
  let flattened = [];

  if (!Array.isArray(playlistsArr)) {
    return [];
  }

  for (let i = 0; i < playlistsArr.length; i++) {
    let currentPlaylist = playlistsArr[i];
    for (let j = 0; j < currentPlaylist.length; j++) {
      let newObj = {
        trackId: currentPlaylist[j].trackId,
        artist: currentPlaylist[j].artist,
        title: currentPlaylist[j].title,
        votes: currentPlaylist[j].votes,
        bpm: currentPlaylist[j].bpm,
        source: [i, j],
      };

      flattened.push(newObj);
    }
  }

  return flattened;
}

/**
 * User Stories #3
 * 1. buat fungsi scoreTrack(trackArr), trackArr merupakan array dari object track yang di return oleh fungsi flattenPlaylists.
 * 2. Hasil return nya berupa array baru dari object track, masing masing dengan tambahan property score
 * 3. score = votes * 10 - Math.abs(bpm - 120)
 */

let playlistKu = flattenPlaylists(playlists);
// console.log(playlistKu)
// console.log("+".repeat(40))

function scoreTracks(trackArr) {
  let result = [];

  for (let i = 0; i < trackArr.length; i++) {
    let newObj = {
      ...trackArr[i],
      score: trackArr[i].votes * 10 - Math.abs(trackArr[i].bpm - 120),
    };
    result.push(newObj);
  }

  return result;
}

/**USER STORIES #4
 * 1. buat fungsi dedupeTracks(trackArr), trackArr merupakan array dari object track hasil return dari  fugnsi scoreTracks.
 * 2. Return array baru dengan menghapus trackId yang dulicate.
 */

let skoringLagu = scoreTracks(playlistKu);
// console.log(skoringLagu)
function dedupeTracks(trackArr) {
  let result = [];

  for (let i = 0; i < trackArr.length; i++) {
    // dapatkan trackId referensi.
    let currentTrack = trackArr[i];
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      // dapatkan trackId untuk pemanding
      let trackInResult = result[j];

      //bandingkan apakah nilainya sama
      if (currentTrack.trackId === trackInResult.trackId) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate === false) {
      result.push(currentTrack);
    }
  }
  return result;
}

// console.log(dedupeTracks(skoringLagu))

/**USER STORIES 5
 * 1. buat fungsi enforceArtistQuota(trackObjArr, number).
 * 2. trackObjArr merupakan hasil dari pemanggilan fungsi dedupeTracks.
 * 3. number merupakan kemunculan maximal yang di bolehkan per artist
 * 4. return fungsi berupa array baru dimana tidak ada artist yang muncul lebih dari angka yang diberikan.
 */

let noDuplicateTrack = dedupeTracks(skoringLagu);
// console.log(noDuplicateTrack);
// console.log("#".repeat(40))

function enforceArtistQuota(trackObjArr, max) {
  let result = [];

  for (let i = 0; i < trackObjArr.length; i++) {
    let currentTrack = trackObjArr[i];
    let artistCount = 0;

    for (let j = 0; j < result.length; j++) {
      let trackInResult = result[j];
      // Naikkan nilai artistCount apabila ada artis.
      if (currentTrack.artist === trackInResult.artist) {
        artistCount++;
      }
    }

    if (artistCount < max) {
      result.push(currentTrack);
    }
  }

  return result;
}

// console.log(enforceArtistQuota(noDuplicateTrack, 1))

/** USER STORIES 6
 * 1. Buat fungsi buildSchedule(trackObjArr).
 * 2. trackObjArr merupakan hasil dari fungsi enforceArtistQuota
 * 3. return berupa array baru dari {slot, trackId } objects,
 * 4. slot merupakan index-1 yang merepresentasikan posisi track dalam urutan broadcast.
 * 5.
 */

let artistQuotaTrack = enforceArtistQuota(noDuplicateTrack, 2);
// console.log(artistQuotaTrack)

function buildSchedule(trackObjArr) {
  let schedule = [];

  for (let i = 0; i < trackObjArr.length; i++) {
    let currentTrack = trackObjArr[i];

    let newObj = {
      slot: i + 1,
      trackId: trackObjArr[i].trackId,
    };

    schedule.push(newObj);
  }

  return schedule;
}

// console.log(buildSchedule(artistQuotaTrack))

/** USER STORIES 7
 * 1. buat fungsi remixPlaylist(playlistsArr, maxAllowedArtistOccurence);
 * 2. function harus return final broadcast schedule sebagai array {slot, trackId }, dengan memanggil :
 *  flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, buldSchedule dalam urutan yang benar
 */

function remixPlaylist(playlistsArr, maxAllowedArtistOccurence) {
  let flattenList = flattenPlaylists(playlistsArr);
  let scoredTracks = scoreTracks(flattenList);
  let deduplicatedTrack = dedupeTracks(scoredTracks);
  let limitArtistQuota = enforceArtistQuota(
    deduplicatedTrack,
    maxAllowedArtistOccurence,
  );
  let finalSchedule = buildSchedule(limitArtistQuota);

  return finalSchedule;
}

console.log(remixPlaylist(playlists, 2));
