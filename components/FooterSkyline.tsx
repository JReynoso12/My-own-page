/** NYC skyline + glow — matches daredevil-theme-demo.html */
export default function FooterSkyline() {
  return (
    <div className="pointer-events-none relative w-full overflow-hidden">
      <svg
        className="block w-full"
        viewBox="0 0 1200 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="cityGlowFooter" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CC0000" stopOpacity={0} />
            <stop offset="100%" stopColor="#8B0000" stopOpacity={0.18} />
          </linearGradient>
        </defs>
        <rect x="0" y="100" width="1200" height="120" fill="url(#cityGlowFooter)" />
        <rect x="0" y="130" width="40" height="90" fill="#0d0d0f" />
        <rect x="5" y="110" width="30" height="20" fill="#0d0d0f" />
        <rect x="8" y="95" width="24" height="15" fill="#0d0d0f" />
        <rect x="50" y="120" width="60" height="100" fill="#0d0d0f" />
        <rect x="60" y="100" width="40" height="20" fill="#0d0d0f" />
        <rect x="70" y="80" width="20" height="20" fill="#0d0d0f" />
        <rect x="72" y="68" width="16" height="12" fill="#0d0d0f" />
        <rect x="80" y="55" width="2" height="13" fill="#CC0000" opacity={0.7} />
        <rect x="120" y="145" width="50" height="75" fill="#0d0d0f" />
        <rect x="130" y="130" width="30" height="15" fill="#0d0d0f" />
        <rect x="135" y="115" width="20" height="15" fill="#0d0d0f" />
        <rect x="125" y="155" width="6" height="5" fill="#8B0000" opacity={0.6} />
        <rect x="135" y="155" width="6" height="5" fill="#8B0000" opacity={0.4} />
        <rect x="145" y="170" width="6" height="5" fill="#8B0000" opacity={0.7} />
        <rect x="180" y="100" width="70" height="120" fill="#060608" />
        <rect x="195" y="80" width="40" height="20" fill="#060608" />
        <rect x="200" y="60" width="30" height="20" fill="#060608" />
        <rect x="210" y="40" width="10" height="20" fill="#060608" />
        <rect x="214" y="28" width="2" height="12" fill="#CC0000" opacity={0.8} />
        <rect x="186" y="120" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="200" y="115" width="8" height="6" fill="#8B0000" opacity={0.3} />
        <rect x="215" y="130" width="8" height="6" fill="#8B0000" opacity={0.6} />
        <rect x="186" y="140" width="8" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="260" y="140" width="55" height="80" fill="#0d0d0f" />
        <rect x="275" y="125" width="25" height="15" fill="#0d0d0f" />
        <rect x="290" y="155" width="6" height="5" fill="#8B0000" opacity={0.5} />
        <rect x="300" y="140" width="6" height="5" fill="#8B0000" opacity={0.35} />
        <rect x="325" y="110" width="80" height="110" fill="#060608" />
        <rect x="340" y="90" width="50" height="20" fill="#060608" />
        <rect x="352" y="70" width="26" height="20" fill="#060608" />
        <rect x="358" y="50" width="14" height="20" fill="#060608" />
        <rect x="364" y="35" width="2" height="15" fill="#CC0000" opacity={0.9} />
        <rect x="333" y="130" width="10" height="7" fill="#8B0000" opacity={0.6} />
        <rect x="350" y="125" width="10" height="7" fill="#8B0000" opacity={0.4} />
        <rect x="367" y="135" width="10" height="7" fill="#8B0000" opacity={0.7} />
        <rect x="385" y="120" width="10" height="7" fill="#8B0000" opacity={0.3} />
        <rect x="333" y="150" width="10" height="7" fill="#8B0000" opacity={0.5} />
        <rect x="415" y="130" width="45" height="90" fill="#0d0d0f" />
        <rect x="425" y="115" width="25" height="15" fill="#0d0d0f" />
        <rect x="420" y="150" width="8" height="6" fill="#8B0000" opacity={0.45} />
        <rect x="440" y="155" width="8" height="6" fill="#8B0000" opacity={0.6} />
        <rect x="470" y="120" width="60" height="100" fill="#060608" />
        <rect x="485" y="100" width="30" height="20" fill="#060608" />
        <rect x="490" y="82" width="20" height="18" fill="#060608" />
        <rect x="498" y="65" width="4" height="17" fill="#CC0000" opacity={0.7} />
        <rect x="478" y="145" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="494" y="140" width="8" height="6" fill="#8B0000" opacity={0.35} />
        <rect x="510" y="150" width="8" height="6" fill="#8B0000" opacity={0.6} />
        <rect x="545" y="105" width="90" height="115" fill="#0d0d0f" />
        <rect x="565" y="85" width="50" height="20" fill="#0d0d0f" />
        <rect x="572" y="62" width="36" height="23" fill="#0d0d0f" />
        <rect x="578" y="42" width="24" height="20" fill="#0d0d0f" />
        <rect x="582" y="26" width="16" height="16" fill="#0d0d0f" />
        <rect x="589" y="14" width="2" height="12" fill="#CC0000" opacity={1} />
        <rect x="553" y="130" width="10" height="7" fill="#8B0000" opacity={0.6} />
        <rect x="572" y="125" width="10" height="7" fill="#8B0000" opacity={0.45} />
        <rect x="592" y="135" width="10" height="7" fill="#8B0000" opacity={0.7} />
        <rect x="612" y="120" width="10" height="7" fill="#8B0000" opacity={0.4} />
        <rect x="553" y="155" width="10" height="7" fill="#8B0000" opacity={0.5} />
        <rect x="572" y="150" width="10" height="7" fill="#8B0000" opacity={0.35} />
        <rect x="645" y="135" width="50" height="85" fill="#060608" />
        <rect x="660" y="118" width="20" height="17" fill="#060608" />
        <rect x="652" y="155" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="668" y="148" width="8" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="705" y="115" width="65" height="105" fill="#0d0d0f" />
        <rect x="718" y="95" width="39" height="20" fill="#0d0d0f" />
        <rect x="723" y="78" width="29" height="17" fill="#0d0d0f" />
        <rect x="728" y="62" width="19" height="16" fill="#0d0d0f" />
        <rect x="736" y="50" width="3" height="12" fill="#CC0000" opacity={0.8} />
        <rect x="713" y="140" width="9" height="6" fill="#8B0000" opacity={0.55} />
        <rect x="730" y="135" width="9" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="747" y="145" width="9" height="6" fill="#8B0000" opacity={0.6} />
        <rect x="780" y="125" width="55" height="95" fill="#060608" />
        <rect x="793" y="108" width="29" height="17" fill="#060608" />
        <rect x="788" y="148" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="806" y="142" width="8" height="6" fill="#8B0000" opacity={0.35} />
        <rect x="845" y="110" width="70" height="110" fill="#0d0d0f" />
        <rect x="858" y="90" width="44" height="20" fill="#0d0d0f" />
        <rect x="864" y="72" width="32" height="18" fill="#0d0d0f" />
        <rect x="870" y="55" width="20" height="17" fill="#0d0d0f" />
        <rect x="879" y="42" width="2" height="13" fill="#CC0000" opacity={0.75} />
        <rect x="853" y="135" width="9" height="6" fill="#8B0000" opacity={0.6} />
        <rect x="870" y="130" width="9" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="887" y="140" width="9" height="6" fill="#8B0000" opacity={0.7} />
        <rect x="904" y="125" width="9" height="6" fill="#8B0000" opacity={0.3} />
        <rect x="925" y="138" width="50" height="82" fill="#060608" />
        <rect x="937" y="122" width="26" height="16" fill="#060608" />
        <rect x="930" y="158" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="948" y="152" width="8" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="985" y="118" width="65" height="102" fill="#0d0d0f" />
        <rect x="998" y="98" width="39" height="20" fill="#0d0d0f" />
        <rect x="1004" y="80" width="27" height="18" fill="#0d0d0f" />
        <rect x="1009" y="65" width="17" height="15" fill="#0d0d0f" />
        <rect x="1016" y="52" width="3" height="13" fill="#CC0000" opacity={0.85} />
        <rect x="993" y="145" width="9" height="6" fill="#8B0000" opacity={0.55} />
        <rect x="1010" y="138" width="9" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="1027" y="150" width="9" height="6" fill="#8B0000" opacity={0.65} />
        <rect x="1060" y="130" width="55" height="90" fill="#060608" />
        <rect x="1073" y="112" width="29" height="18" fill="#060608" />
        <rect x="1066" y="155" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="1084" y="148" width="8" height="6" fill="#8B0000" opacity={0.35} />
        <rect x="1125" y="145" width="50" height="75" fill="#0d0d0f" />
        <rect x="1138" y="128" width="24" height="17" fill="#0d0d0f" />
        <rect x="1143" y="115" width="14" height="13" fill="#0d0d0f" />
        <rect x="1149" y="103" width="2" height="12" fill="#CC0000" opacity={0.7} />
        <rect x="1130" y="163" width="8" height="6" fill="#8B0000" opacity={0.5} />
        <rect x="1145" y="158" width="8" height="6" fill="#8B0000" opacity={0.4} />
        <rect x="0" y="218" width="1200" height="2" fill="#CC0000" opacity={0.2} />
        <rect x="0" y="220" width="1200" height="10" fill="#060608" />
      </svg>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[rgba(180,0,0,0.12)] to-transparent" />
    </div>
  );
}
