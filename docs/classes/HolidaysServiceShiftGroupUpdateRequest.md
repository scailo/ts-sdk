[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceShiftGroupUpdateRequest

# Class: HolidaysServiceShiftGroupUpdateRequest

Describes the parameters required to update a shift in a shift group

**`Generated`**

from message Scailo.HolidaysServiceShiftGroupUpdateRequest

## Hierarchy

- `Message`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\>

  ↳ **`HolidaysServiceShiftGroupUpdateRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceShiftGroupUpdateRequest.md#constructor)

### Properties

- [holidayId](HolidaysServiceShiftGroupUpdateRequest.md#holidayid)
- [id](HolidaysServiceShiftGroupUpdateRequest.md#id)
- [shiftGroupId](HolidaysServiceShiftGroupUpdateRequest.md#shiftgroupid)
- [userComment](HolidaysServiceShiftGroupUpdateRequest.md#usercomment)
- [fields](HolidaysServiceShiftGroupUpdateRequest.md#fields)
- [runtime](HolidaysServiceShiftGroupUpdateRequest.md#runtime)
- [typeName](HolidaysServiceShiftGroupUpdateRequest.md#typename)

### Methods

- [clone](HolidaysServiceShiftGroupUpdateRequest.md#clone)
- [equals](HolidaysServiceShiftGroupUpdateRequest.md#equals)
- [fromBinary](HolidaysServiceShiftGroupUpdateRequest.md#frombinary)
- [fromJson](HolidaysServiceShiftGroupUpdateRequest.md#fromjson)
- [fromJsonString](HolidaysServiceShiftGroupUpdateRequest.md#fromjsonstring)
- [getType](HolidaysServiceShiftGroupUpdateRequest.md#gettype)
- [toBinary](HolidaysServiceShiftGroupUpdateRequest.md#tobinary)
- [toJSON](HolidaysServiceShiftGroupUpdateRequest.md#tojson)
- [toJson](HolidaysServiceShiftGroupUpdateRequest.md#tojson-1)
- [toJsonString](HolidaysServiceShiftGroupUpdateRequest.md#tojsonstring)
- [equals](HolidaysServiceShiftGroupUpdateRequest.md#equals-1)
- [fromBinary](HolidaysServiceShiftGroupUpdateRequest.md#frombinary-1)
- [fromJson](HolidaysServiceShiftGroupUpdateRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceShiftGroupUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceShiftGroupUpdateRequest**(`data?`): [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\> |

#### Returns

[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Overrides

Message\&lt;HolidaysServiceShiftGroupUpdateRequest\&gt;.constructor

#### Defined in

src/holidays.scailo_pb.ts:526

## Properties

### holidayId

• **holidayId**: `bigint` = `protoInt64.zero`

Stores the holiday ID

**`Generated`**

from field: uint64 holiday_id = 10;

#### Defined in

src/holidays.scailo_pb.ts:517

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/holidays.scailo_pb.ts:510

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 11;

#### Defined in

src/holidays.scailo_pb.ts:524

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/holidays.scailo_pb.ts:503

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/holidays.scailo_pb.ts:533

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/holidays.scailo_pb.ts:531

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceShiftGroupUpdateRequest"``

#### Defined in

src/holidays.scailo_pb.ts:532

## Methods

### clone

▸ **clone**(): [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md) \| `PlainMessage`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md) \| `PlainMessage`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md) \| `PlainMessage`\<[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/holidays.scailo_pb.ts:552

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:540

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:544

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupUpdateRequest`](HolidaysServiceShiftGroupUpdateRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:548
