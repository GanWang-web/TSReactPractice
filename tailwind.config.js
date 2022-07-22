module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '288': '72rem',
        '13/12':'108.3%',
        '14/12':'116.6%',
        '15/12':'125%',
        '16/12':'133.3%',
      },
      gridTemplateColumns: {
       '4': 'repeat(4, minmax(0, 1fr))',
       '5': 'repeat(5, minmax(0, 1fr))',
       '6': 'repeat(6, minmax(0, 1fr))',
       '7': 'repeat(7, minmax(0, 1fr))',
       '8': 'repeat(8, minmax(0, 1fr))',
       '9': 'repeat(9, minmax(0, 1fr))',
       '10': 'repeat(10, minmax(0, 1fr))',
       '11': 'repeat(11, minmax(0, 1fr))',
       '12': 'repeat(12, minmax(0, 1fr))',
       '13': 'repeat(13, minmax(0, 1fr))',
       '14': 'repeat(14, minmax(0, 1fr))',
       '15': 'repeat(15, minmax(0, 1fr))',
       '16': 'repeat(16, minmax(0, 1fr))',
       '17': 'repeat(17, minmax(0, 1fr))',
       '18': 'repeat(18, minmax(0, 1fr))',
       '19': 'repeat(19, minmax(0, 1fr))',
       '20': 'repeat(20, minmax(0, 1fr))',
       '21': 'repeat(21, minmax(0, 1fr))',
       '22': 'repeat(22, minmax(0, 1fr))',
       '23': 'repeat(23, minmax(0, 1fr))',
       '24': 'repeat(24, minmax(0, 1fr))',
       '25': 'repeat(25, minmax(0, 1fr))',
       '26': 'repeat(26, minmax(0, 1fr))',
      },
      translate: {
        '60/12':"500%",
        '59/12': '491.6%',
        '58/12': '483.3%',
        '57/12': '475%',
        '56/12': '466.6%',
        '55/12': '458.3%',
        '54/12': '450%',
        '53/12': '441.6%',
        '52/12': '433.3%',
        '51/12': '425%',
        '50/12': '416.6%',
        '49/12': '408.3%',
        '48/12':"400%",
        '47/12': '391.6%',
        '46/12': '383.3%',
        '45/12': '375%',
        '44/12': '366.6%',
        '43/12': '358.3%',
        '42/12': '350%',
        '41/12': '341.6%',
        '40/12': '333.3%',
        '39/12': '325%',
        '38/12': '316.6%',
        '37/12': '308.3%',
        '36/12':"300%",
        '35/12': '291.6%',
        '34/12': '283.3%',
        '33/12': '275%',
        '32/12': '266.6%',
        '31/12': '258.3%',
        '30/12': '250%',
        '29/12': '241.6%',
        '28/12': '233.3%',
        '27/12': '225%',
        '26/12': '216.6%',
        '25/12': '208.3%',
        '24/12':"200%",
        '23/12': '191.6%',
        '22/12': '183.3%',
        '21/12': '175%',
        '20/12': '166.6%',
        '19/12': '158.3%',
        '18/12': '150%',
        '17/12': '141.6%',
        '16/12': '133.3%',
        '15/12': '125%',
        '14/12': '116.6%',
        '13/12': '108.3%',
        '12/12':"100%",
        '11/12': '91.6%',
        '10/12': '83.3%',
        '9/12': '75%',
        '8/12': '66.6%',
        '7/12': '58.3%',
        '6/12': '50%',
        '5/12': '41.6%',
        '4/12': '33.3%',
        '3/12': '25%',
        '2/12': '16.6%',
        '1/12': '8.3%',
        '0/12': '0%',
        '-1/12': '-8.3%',
        '-2/12': '-16.6%',
        '-3/12': '-25%',
        '-4/12': '-33.3%',
        '-5/12': '-41.6%',
        '-6/12': '-50%',
        '-7/12': '-58.3%',
        '-8/12': '-66.6%',
        '-9/12': '-75%',
        '-10/12': '-83.3%',
        '-11/12': '-91.6%',
        '-12/12': '-100%',
        '-13/12': '-108.3%',
        '-14/12': '-116.6%',
        '-15/12': '-125%',
        '-16/12': '-133.3%',
        '-17/12': '-141.6%',
        '-18/12': '-150%',
        '-19/12': '-158.3%',
        '-20/12': '-166.6%',
        '-21/12': '-175%',
        '-22/12': '-183.3%',
        '-23/12': '-191.6%',
        '-24/12': '-200%',
        '-25/12': '-208.3%',
        '-26/12': '-216.6%',
        '-27/12': '-225%',
        '-28/12': '-233.3%',
        '-29/12': '-241.6%',
        '-30/12': '-250%',
        '-31/12': '-258.3%',
        '-32/12': '-266.6%',
        '-33/12': '-275%',
        '-34/12': '-283.3%',
        '-35/12': '-291.6%',
        '-36/12': '-300%',
        '-37/12': '-308.3%',
        '-38/12': '-316.6%',
        '-39/12': '-325%',
        '-40/12': '-333.3%',
        '-41/12': '-341.6%',
        '-42/12': '-350%',
        '-43/12': '-358.3%',
        '-44/12': '-366.6%',
        '-45/12': '-375%',
        '-46/12': '-383.3%',
        '-47/12': '-391.6%',
        '-48/12': '-400%',
        '-49/12': '-408.3%',
        '-50/12': '-416.6%',
        '-51/12': '-425%',
        '-52/12': '-433.3%',
        '-53/12': '-441.6%',
        '-54/12': '-450%',
        '-55/12': '-458.3%',
        '-56/12': '-466.6%',
        '-57/12': '-475%',
        '-58/12': '-483.3%',
        '-59/12': '-491.6%',
        '-60/12': '-500%',
        '-61/12': '-508.3%',
        '-62/12': '-516.6%',
        '-63/12': '-525%',
        '-64/12': '-533.3%',
        '-65/12': '-541.6%',
        '-66/12': '-550%',
        '-67/12': '-558.3%',
        '-68/12': '-566.6%',
        '-69/12': '-575%',
        '-70/12': '-583.3%',
        '-71/12': '-591.6%',
        '-72/12': '-600%',
        '-73/12': '-608.3%',
        '-74/12': '-616.6%',
        '-75/12': '-625%',
        '-76/12': '-633.3%',
        '-77/12': '-641.6%',
        '-78/12': '-650%',
        '-79/12': '-658.3%',
        '-80/12': '-666.6%',
        '-81/12': '-675%',
        '-82/12': '-683.3%',
        '-83/12': '-691.6%',
        '-84/12': '-700%',
        '-85/12': '-708.3%',
        '-86/12': '-716.6%',
        '-87/12': '-725%',
        '-88/12': '-733.3%',
        '-89/12': '-741.6%',
        '-90/12': '-750%',
        '-91/12': '-758.3%',
        '-92/12': '-766.6%',
        '-93/12': '-775%',
        '-94/12': '-783.3%',
        '-95/12': '-791.6%',
        '-96/12': '-800%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
