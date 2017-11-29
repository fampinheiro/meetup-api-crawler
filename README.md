# meetup-api-crawler

You can get your api key from https://secure.meetup.com/meetup_api/key/ and then run the command with the group name you want to get information about

`npx meetup-api-crawler --key xxxxxxxxxxxxxxxx require-lx`

You can have some more information of what is happening setting the `DEBUG` environment variable.
The available options are `request` and `ratelimit`.