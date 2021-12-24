const id = "EVENT_MAX_SFX";
const name = "Maximum SFX";
const groups = ["MAX","EVENT_GROUP_MUSIC"];

const channels = ["Channel 1", "Channel 2", "Channel 3", "Channel 4"];

const fields = [
  {
    key: "channels",
    label: "Channel",
    type: "togglebuttons",
    options: [
      [1, "Channel 1"],
      [2, "Channel 2"],
      [3, "Channel 3"],
      [4, "Channel 4"],
    ],
    allowMultiple: false,
    allowNone: false,
  },
  {
    key: "length",
    label: "Duration",
    type: "slider",
    min: 1,
    max: 60,
    defaultValue: 8,
  },
  {
    key: "hex",
    label:"Sound Hex",
    type: "text",
    defaultValue: "0x16, 0x40, 0x73, 0x00, 0xC3",
  },
];

const compile = (input, helpers) => {
  const _addCmd = helpers._addCmd;
  const length = input.length;
  const channels = input.channels;
  const hex = input.hex;
  
  _addCmd("VM_SOUND_PLAY", length, channels, hex);
};
module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};