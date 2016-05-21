import Kontainer from 'kontainer-js';
//import Buffer from '../../src/core/Buffer';

Kontainer.use('webm');

export default {
  fullAV: (
    <File>
      <EBML>
      	<EBMLVersion value={1} />
      	<EBMLReadVersion value={1} />
      	<EBMLMaxIDLength value={4} />
      	<EBMLMaxSizeLength value={8} />
      	<DocType value="webm" />
      	<DocTypeVersion value={2} />
      	<DocTypeReadVersion value={2} />
      </EBML>
      <Segment>
      	<SeekHead>
      		<Seek>
      			<SeekID value="Info" />
      			<SeekPosition value={223} />
      		</Seek>
      		<Seek>
      			<SeekID value="Tracks" />
      			<SeekPosition value={304} />
      		</Seek>
      		<Seek>
      			<SeekID value="Cues" />
      			<SeekPosition value={160132} />
      		</Seek>
      	</SeekHead>
      	<Void value={new Buffer(163)} />
      	<Info>
      		<TimecodeScale value={1000000} />
      		<MuxingApp {...{
      			value: 'Lavf56.40.101'
      		}} />
      		<WritingApp {...{
      			value: 'Lavf56.40.101'
      		}} />
      		<SegmentUID value={new Buffer(16)} />
      		<Duration value={1085757184} />
      	</Info>
      	<Tracks>
      		<TrackEntry>
      			<TrackNumber value={1} />
      			<TrackUID value={1} />
      			<FlagLacing value={false} />
      			<Language value="und" />
      			<CodecID value="V_VP8" />
      			<TrackType {...{
      				value: 1,
      				kind: 'video'
      			}} />
            <FlagEnabled value={true} />
            <FlagDefault value={true} />
            <FlagForced value={true} />
      			<DefaultDuration value={33366666} />
            <SeekPreRoll value={0} />
      			<Video>
              <FlagInterlaced value="progressive" />
      				<PixelWidth value={320} />
      				<PixelHeight value={240} />
      			</Video>
      		</TrackEntry>
      		<TrackEntry>
      			<TrackNumber value={2} />
      			<TrackUID value={2} />
      			<FlagLacing value={false} />
      			<Language value="und" />
      			<CodecID value="A_VORBIS" />
      			<TrackType {...{
      				value: 2,
      				kind: 'audio'
      			}} />
            <FlagEnabled value={true} />
            <FlagDefault value={true} />
            <FlagForced value={false} />
            <SeekPreRoll value={0} />
      			<Audio>
      				<Channels value={2} />
      				<SamplingFrequency value={1088784512} />
      				<BitDepth value={32} />
      			</Audio>
      			<CodecPrivate value={new Buffer(3950)} />
      		</TrackEntry>
      	</Tracks>
      	<Cluster>
      		<Timecode value={0} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 0,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(39)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(17003)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 3,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(220)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 16,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(212)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 36,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(71)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 39,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 63,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 70,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(131)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 86,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(216)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 103,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(98)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 109,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(213)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 132,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 136,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(212)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 155,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(206)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 170,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(327)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 179,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(217)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 202,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(228)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 203,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(267)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 225,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(205)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 237,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(962)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 248,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(217)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 270,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(219)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 271,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(208)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 295,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(208)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 303,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(281)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 318,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 337,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(278)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 341,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 364,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(218)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 370,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(268)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 388,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(211)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 403,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(295)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 411,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 434,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(214)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 437,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(288)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 457,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(215)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 470,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(378)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 480,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(220)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 504,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1030)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 504,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(226)]
      		}} />
      	</Cluster>
      	<Cluster>
      		<Timecode value={527} />
      		<SimpleBlock {...{
      			trackNumber: 2,
      			timecode: 0,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(189)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 978,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(21199)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1111,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(3622)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1278,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2706)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1378,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2279)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1478,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2098)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1545,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1728)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1645,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1701)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 1778,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(4545)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2179,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(8116)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2379,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(3174)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2479,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2964)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2612,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2267)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2713,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2567)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2779,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2186)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 2913,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(5580)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3113,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(4290)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3313,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(4241)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3413,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1738)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3547,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(3784)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3747,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(4840)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3847,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1884)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3981,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(6420)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4147,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(3001)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4314,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(3289)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4414,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1126)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4481,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(1352)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4581,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2259)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4781,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(8857)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 4881,
      			flags: {keyframe: false, invisible: false, discardable: false},
      			frames: [new Buffer(2728)]
      		}} />
      		<Cluster>
      			<Timecode value={5575} />
      			<SimpleBlock {...{
      				trackNumber: 1,
      				timecode: 0,
      				flags: {keyframe: false, invisible: false, discardable: false},
      				frames: [new Buffer(3231)]
      			}} />
      			<SimpleBlock {...{
      				trackNumber: 1,
      				timecode: 67,
      				flags: {keyframe: false, invisible: false, discardable: false},
      				frames: [new Buffer(1344)]
      			}} />
      			<SimpleBlock {...{
      				trackNumber: 1,
      				timecode: 200,
      				flags: {keyframe: false, invisible: false, discardable: false},
      				frames: [new Buffer(2616)]
      			}} />
      			<SimpleBlock {...{
      				trackNumber: 1,
      				timecode: 367,
      				flags: {keyframe: false, invisible: false, discardable: false},
      				frames: [new Buffer(4161)]
      			}} />
      		</Cluster>
      		<Cues>
      			<CuePoint>
      				<CueTime value={3} />
      				<CueTrackPositions>
      					<CueTrack value={1} />
      					<CueClusterPosition value={4395} />
      					<CueRelativePosition value={48} />
      				</CueTrackPositions>
      			</CuePoint>
      			<CuePoint>
      				<CueTime value={1505} />
      				<CueTrackPositions>
      					<CueTrack value={1} />
      					<CueClusterPosition value={31779} />
      					<CueRelativePosition value={200} />
      				</CueTrackPositions>
      			</CuePoint>
      		</Cues>
      	</Cluster>
      </Segment>
    </File>
  ),
  audioOnly1: (
    <File>
      <EBML>
      	<EBMLVersion value={1} />
      	<EBMLReadVersion value={1} />
      	<EBMLMaxIDLength value={4} />
      	<EBMLMaxSizeLength value={8} />
      	<DocType value="webm" />
      	<DocTypeVersion value={2} />
      	<DocTypeReadVersion value={2} />
      </EBML>
      <Segment>
      	<SeekHead>
      		<Seek>
      			<SeekID value="Info" />
      			<SeekPosition value={223} />
      		</Seek>
      		<Seek>
      			<SeekID value="Tracks" />
      			<SeekPosition value={304} />
      		</Seek>
      	</SeekHead>
      	<Void value={new Buffer(179)} />
      	<Info>
      		<TimecodeScale value={1000000} />
      		<MuxingApp value="Lavf56.40.101" />
      		<WritingApp value="Lavf56.40.101" />
      		<SegmentUID value={new Buffer(16)} />
      		<Duration value={1082208256} />
      	</Info>
      	<Tracks>
      		<TrackEntry>
      			<TrackNumber value={1} />
      			<TrackUID value={3} />
      			<FlagLacing {...{
      				value: false
      			}} />
      			<Language value="und" />
      			<CodecID value="A_VORBIS" />
      			<TrackType {...{
      				value: 2,
      				kind: 'audio'
      			}} />
            <FlagEnabled value={true} />
            <FlagDefault value={false} />
            <FlagForced value={false} />
            <SeekPreRoll value={0} />
      			<Audio>
      				<Channels value={2} />
      				<SamplingFrequency value={1088784512} />
      				<BitDepth value={32} />
      			</Audio>
      			<CodecPrivate value={new Buffer(3950)} />
      		</TrackEntry>
      	</Tracks>
      	<Cluster>
      		<Timecode value={0} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 0,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(39)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(220)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 16,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(212)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 39,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 63,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 86,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(216)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 109,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(213)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 132,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 155,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(206)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 179,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(217)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 202,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(228)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 225,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(205)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 248,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(217)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 271,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(208)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 295,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(208)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 318,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 341,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 364,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(218)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 388,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(211)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 411,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 434,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(214)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 457,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(215)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 480,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(220)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 504,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(226)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 527,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(189)]
      		}} />
      	</Cluster>
      </Segment>
    </File>
  ),
  audioOnly2: (
    <File>
      <EBML>
      	<EBMLVersion value={1} />
      	<EBMLReadVersion value={1} />
      	<EBMLMaxIDLength value={4} />
      	<EBMLMaxSizeLength value={8} />
      	<DocType value="webm" />
      	<DocTypeVersion value={2} />
      	<DocTypeReadVersion value={2} />
      </EBML>
      <Segment>
      	<SeekHead>
      		<Seek>
      			<SeekID value="Info" />
      			<SeekPosition value={223} />
      		</Seek>
      		<Seek>
      			<SeekID value="Tracks" />
      			<SeekPosition value={304} />
      		</Seek>
      	</SeekHead>
      	<Void value={new Buffer(179)} />
      	<Info>
      		<TimecodeScale value={1000000} />
      		<MuxingApp value="Lavf56.40.101" />
      		<WritingApp value="Lavf56.40.101" />
      		<SegmentUID value={new Buffer(16)} />
      		<Duration value={1082208256} />
      	</Info>
      	<Tracks>
      		<TrackEntry>
      			<TrackNumber value={1} />
      			<TrackUID value={4} />
      			<FlagLacing {...{
      				value: false
      			}} />
      			<Language value="und" />
      			<CodecID value="A_VORBIS" />
      			<TrackType {...{
      				value: 2,
      				kind: 'audio'
      			}} />
            <FlagEnabled value={true} />
            <FlagDefault value={false} />
            <FlagForced value={false} />
            <SeekPreRoll value={0} />
      			<Audio>
      				<Channels value={2} />
      				<SamplingFrequency value={1088784512} />
      				<BitDepth value={32} />
      			</Audio>
      			<CodecPrivate value={new Buffer(3950)} />
      		</TrackEntry>
      	</Tracks>
      	<Cluster>
      		<Timecode value={0} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 0,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(39)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 3,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(220)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 16,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(212)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 39,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 63,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 86,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(216)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 109,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(213)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 132,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 155,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(206)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 179,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(217)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 202,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(228)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 225,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(205)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 248,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(217)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 271,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(208)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 295,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(208)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 318,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 341,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(221)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 364,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(218)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 388,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(211)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 411,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(209)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 434,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(214)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 457,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(215)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 480,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(220)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 504,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(226)]
      		}} />
      		<SimpleBlock {...{
      			trackNumber: 1,
      			timecode: 527,
      			flags: {keyframe: true, invisible: false, discardable: false},
      			frames: [new Buffer(189)]
      		}} />
      	</Cluster>
      </Segment>
    </File>
  )
}
