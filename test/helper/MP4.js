import Kontainer from 'kontainer-js';
//import Buffer from '../../src/core/Buffer';

Kontainer.use('mp4');

export default {
  fullAV: (
    <file>
    	<ftyp {...{
    		majorBrand: 'mp42',
    		minorVersion: 0,
    		compatibleBrands: ['isom', 'mp42']
    	}} />
    	<moov>
    		<mvhd {...{
    			creationTime: new Date(),
    			modificationTime: new Date(),
    			timeScale: 600,
    			duration: 87367,
    			rate: 1,
    			volume: 1,
    			matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
    			nextTrackId: 3
    		}} />
    		<trak>
    			<tkhd {...{
    				flags: {enabled: true, inMovie: true, inPreview: true},
    				creationTime: new Date(),
    				modificationTime: new Date(),
    				trackId: 1,
    				duration: 87362,
    				layer: 0,
    				alternateGroup: 0,
    				volume: 0,
    				matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
    				width: 640,
    				height: 360
    			}} />
    			<edts>
    				<elst {...{
    					entries: [{segmentDuration: 87362, mediaTime: 0, mediaRate: 1}]
    				}} />
    			</edts>
    			<mdia>
    				<mdhd {...{
    					creationTime: new Date(),
    					modificationTime: new Date(),
    					timeScale: 24000,
    					duration: 3494491,
    					language: 'und'
    				}} />
    				<hdlr {...{
    					handlerType: 'video',
    					name: 'VideoHandler'
    				}} />
    				<minf>
    					<vmhd {...{
    						graphicsMode: 'copy',
    						opColor: {r: 0, g: 0, b: 0}
    					}} />
    					<dinf>
    						<dref {...{
    							entryCount: 1
                }} >
    							<url {...{
    								flags: {inTheSameFile: false},
    								location: ''
    							}} />
    						</dref>
    					</dinf>
    					<stbl>
    						<stsd {...{
    							entryCount: 1
                }} >
    							<avc1 {...{
    								dataReferenceIndex: 1,
    								width: 640,
    								height: 360,
    								horizResolution: 72,
    								vertResolution: 72,
    								frameCount: 1,
    								compressorName: '',
    								depth: 24
    							}} >
    								<avcC {...{
    									configurationVersion: 1,
    									avcProfileIndication: 'baseline',
    									profileCompatibility: {constraintSet0Flag: false, constraintSet1Flag: false, constraintSet2Flag: false},
    									avcLevelIndication: 3,
    									lengthSize: 4,
    									sequenceParameterSets: [{length: 23, data: new Buffer(23)}],
    									pictureParameterSets: [{length: 4, data: new Buffer(4)}]
    								}} />
    								<btrt {...{
    									bufferSizeDB: 39681,
    									maxBitrate: 741448,
    									avgBitrate: 288768
    								}} />
    							</avc1>
    						</stsd>
    						<stts {...{
    							entries: [{sampleCount: 3491, sampleDelta: 1001}]
    						}} />
    						<stss {...{
    							entries: [1, 47, 85, 145, 205, 251, 303, 342, 361, 387, 436, 481, 531, 577, 630, 661, 688, 721, 752, 783, 817, 845, 879, 920, 948, 986, 1046, 1081, 1141, 1201, 1227, 1270, 1315, 1375, 1417, 1441, 1469, 1505, 1561, 1590, 1623, 1674, 1705, 1765, 1801, 1861, 1916, 1976, 2001, 2043, 2094, 2154, 2161, 2195, 2253, 2289, 2321, 2367, 2427, 2487, 2521, 2557, 2589, 2621, 2653, 2685, 2717, 2749, 2781, 2813, 2844, 2875, 2881, 2920, 2951, 2979, 3018, 3052, 3091, 3118, 3149, 3174, 3203, 3241, 3301, 3361, 3404, 3443]
    						}} />
    						<stsc {...{
    							entries: [{firstChunk: 1, samplesPerChunk: 12, sampleDescriptionIndex: 1}, {firstChunk: 2, samplesPerChunk: 11, sampleDescriptionIndex: 1}, {firstChunk: 318, samplesPerChunk: 3, sampleDescriptionIndex: 1}]
    						}} />
    						<stsz {...{
    							sampleSize: 0,
    							sampleSizeEntries: new Array(3491)
    						}} />
    						<stco {...{
    							entries: new Array(318)
    						}} />
    					</stbl>
    				</minf>
    			</mdia>
    		</trak>
    		<trak>
    			<tkhd {...{
    				flags: {enabled: true, inMovie: false, inPreview: false},
    				creationTime: new Date(),
    				modificationTime: new Date(),
    				trackId: 2,
    				duration: 87367,
    				layer: 0,
    				alternateGroup: 0,
    				volume: 1,
    				matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
    				width: 0,
    				height: 0
    			}} />
    			<mdia>
    				<mdhd {...{
    					creationTime: new Date(),
    					modificationTime: new Date(),
    					timeScale: 44100,
    					duration: 6421504,
    					language: 'und'
    				}} />
    				<hdlr {...{
    					handlerType: 'audio',
    					name: 'IsoMedia File Produced by Google, 5-11-2011'
    				}} />
    				<minf>
    					<smhd {...{
    						balance: 0
    					}} />
    					<dinf>
    						<dref {...{
    							entryCount: 1
    							}} >
    							<url {...{
    								flags: {inTheSameFile: false},
    								location: ''
    							}} />
    						</dref>
    					</dinf>
    					<stbl>
    						<stsd {...{
    							entryCount: 1
                }} >
    							<mp4a {...{
    								dataReferenceIndex: 1,
    								channelCount: 2,
    								sampleSize: 16,
    								sampleRate: 44100
    							}} >
    								<esds {...{
    									esDescriptor: new Buffer(41)
    								}} />
    							</mp4a>
    						</stsd>
    						<stts {...{
    							entries: [{sampleCount: 6271, sampleDelta: 1024}]
    						}} />
    						<stsc {...{
    							entries: new Array(147)
    						}} />
    						<stsz {...{
    							sampleSize: 0,
    							sampleSizeEntries: new Array(6271)
    						}} />
    						<stco {...{
    							entries: new Array(317)
    						}} />
    					</stbl>
    				</minf>
    			</mdia>
    		</trak>
    	</moov>
    </file>
  ),
  audioOnly1: (
    <file>
      <ftyp {...{
      	majorBrand: 'isom',
      	minorVersion: 512,
      	compatibleBrands: ['isom', 'iso2', 'mp41']
      }} />
      <mdat {...{
      	data: new Buffer(1747514)
      }} />
      <moov>
      	<mvhd {...{
      		creationTime: new Date(),
      		modificationTime: new Date(),
      		timeScale: 1000,
      		duration: 145613,
      		rate: 1,
      		volume: 1,
      		matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
      		nextTrackId: 2
      	}} />
      	<trak>
      		<tkhd {...{
      			flags: {enabled: true, inMovie: true, inPreview: false},
      			creationTime: new Date(),
      			modificationTime: new Date(),
      			trackId: 3,
      			duration: 145613,
      			layer: 0,
      			alternateGroup: 1,
      			volume: 1,
      			matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
      			width: 0,
      			height: 0
      		}} />
      		<edts>
      			<elst {...{
      				entries: [{segmentDuration: 145613, mediaTime: 0, mediaRate: 1}]
      			}} />
      		</edts>
      		<mdia>
      			<mdhd {...{
      				creationTime: new Date(),
      				modificationTime: new Date(),
      				timeScale: 44100,
      				duration: 6421504,
      				language: 'und'
      			}} />
      			<hdlr {...{
      				handlerType: 'audio',
      				name: 'SoundHandler'
      			}} />
      			<minf>
      				<smhd {...{
      					balance: 0
      				}} />
      				<dinf>
      					<dref {...{
      						entryCount: 1
                }} >
      						<url {...{
      							flags: {inTheSameFile: false},
      							location: ''
      						}} />
      					</dref>
      				</dinf>
      				<stbl>
      					<stsd {...{
      						entryCount: 1
      					}} >
      						<mp4a {...{
      							dataReferenceIndex: 1,
      							channelCount: 2,
      							sampleSize: 16,
      							sampleRate: 44100
      						}} >
      							<esds {...{
      								esDescriptor: new Buffer(53)
      							}} />
      						</mp4a>
      					</stsd>
      					<stts {...{
      						entries: [{sampleCount: 6271, sampleDelta: 1024}]
      					}} />
      					<stsc {...{
      						entries: [{firstChunk: 1, samplesPerChunk: 3762, sampleDescriptionIndex: 1}, {firstChunk: 2, samplesPerChunk: 2509, sampleDescriptionIndex: 1}]
      					}} />
      					<stsz {...{
      						sampleSize: 0,
      						sampleSizeEntries: new Array(6271)
      					}} />
      					<stco {...{
      						entries: [44, 1048551]
      					}} />
      				</stbl>
      			</minf>
      		</mdia>
      	</trak>
      </moov>
    </file>
  ),
  audioOnly2: (
    <file>
      <ftyp {...{
      	majorBrand: 'isom',
      	minorVersion: 512,
      	compatibleBrands: ['isom', 'iso2', 'mp41']
      }} />
      <mdat {...{
      	data: new Buffer(1747514)
      }} />
      <moov>
      	<mvhd {...{
      		creationTime: new Date(),
      		modificationTime: new Date(),
      		timeScale: 1000,
      		duration: 145613,
      		rate: 1,
      		volume: 1,
      		matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
      		nextTrackId: 2
      	}} />
      	<trak>
      		<tkhd {...{
      			flags: {enabled: true, inMovie: true, inPreview: false},
      			creationTime: new Date(),
      			modificationTime: new Date(),
      			trackId: 4,
      			duration: 145613,
      			layer: 0,
      			alternateGroup: 1,
      			volume: 1,
      			matrix: [1, 0, 0, 0, 1, 0, 0, 0, 16384],
      			width: 0,
      			height: 0
      		}} />
      		<edts>
      			<elst {...{
      				entries: [{segmentDuration: 145613, mediaTime: 0, mediaRate: 1}]
      			}} />
      		</edts>
      		<mdia>
      			<mdhd {...{
      				creationTime: new Date(),
      				modificationTime: new Date(),
      				timeScale: 44100,
      				duration: 6421504,
      				language: 'und'
      			}} />
      			<hdlr {...{
      				handlerType: 'audio',
      				name: 'SoundHandler'
      			}} />
      			<minf>
      				<smhd {...{
      					balance: 0
      				}} />
      				<dinf>
      					<dref {...{
      						entryCount: 1
                }} >
      						<url {...{
      							flags: {inTheSameFile: false},
      							location: ''
      						}} />
      					</dref>
      				</dinf>
      				<stbl>
      					<stsd {...{
      						entryCount: 1
      					}} >
      						<mp4a {...{
      							dataReferenceIndex: 1,
      							channelCount: 2,
      							sampleSize: 16,
      							sampleRate: 44100
      						}} >
      							<esds {...{
      								esDescriptor: new Buffer(53)
      							}} />
      						</mp4a>
      					</stsd>
      					<stts {...{
      						entries: [{sampleCount: 6271, sampleDelta: 1024}]
      					}} />
      					<stsc {...{
      						entries: [{firstChunk: 1, samplesPerChunk: 3762, sampleDescriptionIndex: 1}, {firstChunk: 2, samplesPerChunk: 2509, sampleDescriptionIndex: 1}]
      					}} />
      					<stsz {...{
      						sampleSize: 0,
      						sampleSizeEntries: new Array(6271)
      					}} />
      					<stco {...{
      						entries: [44, 1048551]
      					}} />
      				</stbl>
      			</minf>
      		</mdia>
      	</trak>
      </moov>
    </file>
  )
}
