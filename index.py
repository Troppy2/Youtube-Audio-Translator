"""
    from youtube_transcript_api import YouTubeTranscriptApi

    video_id = "VIDEO_ID"  # Replace with your video ID
    transcript_list = YouTubeTranscriptApi.get_transcript(video_id)

    # transcript_list is a list of dictionaries containing text and timestamps
    for item in transcript_list:
        print(item['text'])
"""
from youtube_transcript_api import YouTubeTranscriptApi
