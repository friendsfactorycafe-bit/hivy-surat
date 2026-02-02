#!/bin/bash

# HIVY Video Compression Script
# Compresses all videos in the public/videos folder using ffmpeg
# Usage: ./scripts/compress-videos.sh

VIDEOS_DIR="public/videos"
BACKUP_DIR="public/videos_backup"

echo "🎬 HIVY Video Compression Script"
echo ""

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Process each video file
for video in "$VIDEOS_DIR"/*.{mp4,MP4,mov,MOV,webm}; do
  [ -f "$video" ] || continue
  
  filename=$(basename "$video")
  compressed="${video%.*}_compressed.mp4"
  
  echo "Processing: $filename"
  
  # Get original size
  original_size=$(du -h "$video" | cut -f1)
  
  # Compress video
  ffmpeg -i "$video" \
    -vcodec libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(720,iw)':-2" \
    -acodec aac \
    -b:a 128k \
    -y "$compressed" 2>/dev/null
  
  if [ -f "$compressed" ]; then
    new_size=$(du -h "$compressed" | cut -f1)
    
    # Backup original
    mv "$video" "$BACKUP_DIR/$filename"
    
    # Rename compressed to original name (but as mp4)
    mv "$compressed" "${video%.*}.mp4"
    
    echo "✅ $original_size → $new_size"
  else
    echo "❌ Failed to compress $filename"
  fi
done

echo ""
echo "✅ Video compression complete!"
echo "📁 Original videos backed up to: $BACKUP_DIR"
echo ""
echo "After verifying the compressed videos work correctly,"
echo "you can delete the backup folder to save space:"
echo "  rm -rf $BACKUP_DIR"
