﻿using MediaBrowser.Model.LiveTv;
using System;
using System.Collections.Generic;

namespace MediaBrowser.Controller.LiveTv
{
    public class ProgramInfo
    {
        /// <summary>
        /// Id of the program.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets the channel identifier.
        /// </summary>
        /// <value>The channel identifier.</value>
        public string ChannelId { get; set; }

        /// <summary>
        /// Name of the program
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the official rating.
        /// </summary>
        /// <value>The official rating.</value>
        public string OfficialRating { get; set; }
        
        /// <summary>
        /// Description of the progam.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// The start date of the program, in UTC.
        /// </summary>
        public DateTime StartDate { get; set; }

        /// <summary>
        /// The end date of the program, in UTC.
        /// </summary>
        public DateTime EndDate { get; set; }

        /// <summary>
        /// Gets or sets the aspect ratio.
        /// </summary>
        /// <value>The aspect ratio.</value>
        public string AspectRatio { get; set; }

        /// <summary>
        /// Genre of the program.
        /// </summary>
        public List<string> Genres { get; set; }

        /// <summary>
        /// Gets or sets the quality.
        /// </summary>
        /// <value>The quality.</value>
        public ProgramVideoQuality Quality { get; set; }

        /// <summary>
        /// Gets or sets the original air date.
        /// </summary>
        /// <value>The original air date.</value>
        public DateTime? OriginalAirDate { get; set; }

        /// <summary>
        /// Gets or sets the audio.
        /// </summary>
        /// <value>The audio.</value>
        public ProgramAudio Audio { get; set; }

        /// <summary>
        /// Gets or sets the community rating.
        /// </summary>
        /// <value>The community rating.</value>
        public float? CommunityRating { get; set; }
        
        public ProgramInfo()
        {
            Genres = new List<string>();
        }
    }
}
