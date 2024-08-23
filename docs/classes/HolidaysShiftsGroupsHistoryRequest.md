[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysShiftsGroupsHistoryRequest

# Class: HolidaysShiftsGroupsHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.HolidaysShiftsGroupsHistoryRequest

## Hierarchy

- `Message`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\>

  ↳ **`HolidaysShiftsGroupsHistoryRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysShiftsGroupsHistoryRequest.md#constructor)

### Properties

- [holidayId](HolidaysShiftsGroupsHistoryRequest.md#holidayid)
- [shiftGroupId](HolidaysShiftsGroupsHistoryRequest.md#shiftgroupid)
- [fields](HolidaysShiftsGroupsHistoryRequest.md#fields)
- [runtime](HolidaysShiftsGroupsHistoryRequest.md#runtime)
- [typeName](HolidaysShiftsGroupsHistoryRequest.md#typename)

### Methods

- [clone](HolidaysShiftsGroupsHistoryRequest.md#clone)
- [equals](HolidaysShiftsGroupsHistoryRequest.md#equals)
- [fromBinary](HolidaysShiftsGroupsHistoryRequest.md#frombinary)
- [fromJson](HolidaysShiftsGroupsHistoryRequest.md#fromjson)
- [fromJsonString](HolidaysShiftsGroupsHistoryRequest.md#fromjsonstring)
- [getType](HolidaysShiftsGroupsHistoryRequest.md#gettype)
- [toBinary](HolidaysShiftsGroupsHistoryRequest.md#tobinary)
- [toJSON](HolidaysShiftsGroupsHistoryRequest.md#tojson)
- [toJson](HolidaysShiftsGroupsHistoryRequest.md#tojson-1)
- [toJsonString](HolidaysShiftsGroupsHistoryRequest.md#tojsonstring)
- [equals](HolidaysShiftsGroupsHistoryRequest.md#equals-1)
- [fromBinary](HolidaysShiftsGroupsHistoryRequest.md#frombinary-1)
- [fromJson](HolidaysShiftsGroupsHistoryRequest.md#fromjson-1)
- [fromJsonString](HolidaysShiftsGroupsHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysShiftsGroupsHistoryRequest**(`data?`): [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\> |

#### Returns

[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Overrides

Message\&lt;HolidaysShiftsGroupsHistoryRequest\&gt;.constructor

#### Defined in

src/holidays.scailo_pb.ts:752

## Properties

### holidayId

• **holidayId**: `bigint` = `protoInt64.zero`

Stores the holiday ID

**`Generated`**

from field: uint64 holiday_id = 10;

#### Defined in

src/holidays.scailo_pb.ts:743

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 11;

#### Defined in

src/holidays.scailo_pb.ts:750

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/holidays.scailo_pb.ts:759

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/holidays.scailo_pb.ts:757

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysShiftsGroupsHistoryRequest"``

#### Defined in

src/holidays.scailo_pb.ts:758

## Methods

### clone

▸ **clone**(): [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

Create a deep copy.

#### Returns

[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md) \| `PlainMessage`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md) \| `PlainMessage`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\> |
| `b` | `undefined` \| [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md) \| `PlainMessage`\<[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/holidays.scailo_pb.ts:776

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:764

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:768

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsHistoryRequest`](HolidaysShiftsGroupsHistoryRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:772
