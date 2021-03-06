
export const deviceExample = {
    "id": "5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e",
    "is_active": false,
    "is_private_session": true,
    "is_restricted": false,
    "name": "My fridge",
    "type": "Computer",
    "volume_percent": 100
};
export const playlistExample = {
    "collaborative": false,
    "external_urls": {
        "spotify": "https://open.spotify.com/user/shyyko.serhiy/playlist/1hHZ6mhBdVZjr3OwGciflY"
    },
    "href": "https://api.spotify.com/v1/users/shyyko.serhiy/playlists/1hHZ6mhBdVZjr3OwGciflY",
    "id": "1hHZ6mhBdVZjr3OwGciflY",
    "images": [
        {
            "height": 640,
            "url": "https://i.scdn.co/image/7bb2ddeeed3584a12bf0d5ba28744f1a513cfe5e",
            "width": 640
        }
    ],
    "name": "Cro",
    "owner": {
        "display_name": "Serhiy Shyyko",
        "external_urls": {
            "spotify": "https://open.spotify.com/user/shyyko.serhiy"
        },
        "href": "https://api.spotify.com/v1/users/shyyko.serhiy",
        "id": "shyyko.serhiy",
        "type": "user",
        "uri": "spotify:user:shyyko.serhiy"
    },
    "primary_color": null,
    "public": true,
    "snapshot_id": "Myw5ZGZiZGY4MDFjZWMzY2U1MmQ1OTBmOGFiY2I0MTJkYmM3MjJhNjRj",
    "tracks": {
        "href": "https://api.spotify.com/v1/users/shyyko.serhiy/playlists/1hHZ6mhBdVZjr3OwGciflY/tracks",
        "total": 32
    },
    "type": "playlist",
    "uri": "spotify:user:shyyko.serhiy:playlist:1hHZ6mhBdVZjr3OwGciflY"
};
export const trackExample = {
    "track": {
        "album": {
            "id": "1LdR3si9EGC2Eav5Arcn0T",
            "name": "That Dress"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3uhfMjcE5HJqMIWh3Iolw0"
                },
                "href": "https://api.spotify.com/v1/artists/3uhfMjcE5HJqMIWh3Iolw0",
                "id": "3uhfMjcE5HJqMIWh3Iolw0",
                "name": "The Pale White",
                "type": "artist",
                "uri": "spotify:artist:3uhfMjcE5HJqMIWh3Iolw0"
            }
        ],
        "id": "4I9qjUCx8jFQkFFi5Eyt5x",
        "name": "That Dress",
        "uri": "spotify:track:4I9qjUCx8jFQkFFi5Eyt5x"
    }
};

export const userExample = {
    "birthdate": "1937-06-01",
    "country": "SE",
    "display_name": "JM Wizzler",
    "email": "email@example.com",
    "external_urls": {
        "spotify": "https://open.spotify.com/user/wizzler"
    },
    "followers": {
        "href": null,
        "total": 3829
    },
    "href": "https://api.spotify.com/v1/users/wizzler",
    "id": "wizzler",
    "images": [
        {
            "height": null,
            "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg",
            "width": null
        }
    ],
    "product": "premium",
    "type": "user",
    "uri": "spotify:user:wizzler"
}

const playerExample = {
    "device": {
        "id": "4c048f453d45e4352073b81e2052c468fd14ea0",
        "is_active": true,
        "is_private_session": false,
        "is_restricted": false,
        "name": "Some dude's macbook",
        "type": "Computer",
        "volume_percent": 100
    },
    "shuffle_state": false,
    "repeat_state": "context" as "track" | "context" | "off",
    "timestamp": 1538016939274,
    "context": {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/6uothxMWeLWIhsGeF7cyo4"
        },
        "href": "https://api.spotify.com/v1/artists/6uothxMWeLWIhsGeF7cyo4",
        "type": "artist",
        "uri": "spotify:artist:6uothxMWeLWIhsGeF7cyo4"
    },
    "progress_ms": 166444,
    "item": {
        "album": {
            "album_type": "compilation",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                    },
                    "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                    "id": "0LyfQWJT6nXafLPZqxe9Of",
                    "name": "Various Artists",
                    "type": "artist",
                    "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }
            ],
            "available_markets": [
                "AD",
                "ZA"
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/04rz93AqGy9JduzV3K81Dh"
            },
            "href": "https://api.spotify.com/v1/albums/04rz93AqGy9JduzV3K81Dh",
            "id": "04rz93AqGy9JduzV3K81Dh",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/7bcfc7d27bb7cdb914e5b01fbeea246d91c52938",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/8a4756d520b2c0973de9a6fd67e1c3b16cdc0860",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/b1b6c27bff91023db412f1affb88b2b9b5a5111a",
                    "width": 64
                }
            ],
            "name": "The Lord Of The Rings: The Fellowship Of The Ring (Original Motion Picture Soundtrack)",
            "release_date": "2001-11-19",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:04rz93AqGy9JduzV3K81Dh"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6uothxMWeLWIhsGeF7cyo4"
                },
                "href": "https://api.spotify.com/v1/artists/6uothxMWeLWIhsGeF7cyo4",
                "id": "6uothxMWeLWIhsGeF7cyo4",
                "name": "Enya",
                "type": "artist",
                "uri": "spotify:artist:6uothxMWeLWIhsGeF7cyo4"
            }
        ],
        "available_markets": [
            "AD",
            "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 257760,
        "explicit": false,
        "external_ids": {
            "isrc": "GBAHT0108619"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/7LAJWSKK8JMIZAcblgUMS6"
        },
        "href": "https://api.spotify.com/v1/tracks/7LAJWSKK8JMIZAcblgUMS6",
        "id": "7LAJWSKK8JMIZAcblgUMS6",
        "is_local": false,
        "name": "May It Be",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/1c16e8f9f27460d600fbfcb75d067672bacb961e?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 18,
        "type": "track",
        "uri": "spotify:track:7LAJWSKK8JMIZAcblgUMS6"
    },
    "currently_playing_type": "track",
    "is_playing": true
};

export type Device = typeof deviceExample;
export type Playlist = typeof playlistExample;
export type Track = typeof trackExample;
export type User = typeof userExample;
export type Player = typeof playerExample;