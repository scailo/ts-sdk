[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsShiftsHistoryRequest

# Class: ShiftsGroupsShiftsHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.ShiftsGroupsShiftsHistoryRequest

## Hierarchy

- `Message`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\>

  ↳ **`ShiftsGroupsShiftsHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsShiftsHistoryRequest.md#constructor)

### Properties

- [shiftGroupId](ShiftsGroupsShiftsHistoryRequest.md#shiftgroupid)
- [shiftId](ShiftsGroupsShiftsHistoryRequest.md#shiftid)
- [fields](ShiftsGroupsShiftsHistoryRequest.md#fields)
- [runtime](ShiftsGroupsShiftsHistoryRequest.md#runtime)
- [typeName](ShiftsGroupsShiftsHistoryRequest.md#typename)

### Methods

- [clone](ShiftsGroupsShiftsHistoryRequest.md#clone)
- [equals](ShiftsGroupsShiftsHistoryRequest.md#equals)
- [fromBinary](ShiftsGroupsShiftsHistoryRequest.md#frombinary)
- [fromJson](ShiftsGroupsShiftsHistoryRequest.md#fromjson)
- [fromJsonString](ShiftsGroupsShiftsHistoryRequest.md#fromjsonstring)
- [getType](ShiftsGroupsShiftsHistoryRequest.md#gettype)
- [toBinary](ShiftsGroupsShiftsHistoryRequest.md#tobinary)
- [toJSON](ShiftsGroupsShiftsHistoryRequest.md#tojson)
- [toJson](ShiftsGroupsShiftsHistoryRequest.md#tojson-1)
- [toJsonString](ShiftsGroupsShiftsHistoryRequest.md#tojsonstring)
- [equals](ShiftsGroupsShiftsHistoryRequest.md#equals-1)
- [fromBinary](ShiftsGroupsShiftsHistoryRequest.md#frombinary-1)
- [fromJson](ShiftsGroupsShiftsHistoryRequest.md#fromjson-1)
- [fromJsonString](ShiftsGroupsShiftsHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsShiftsHistoryRequest**(`data?`): [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\> |

#### Returns

[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Overrides

Message\&lt;ShiftsGroupsShiftsHistoryRequest\&gt;.constructor

#### Defined in

src/shifts_groups.scailo_pb.ts:712

## Properties

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 10;

#### Defined in

src/shifts_groups.scailo_pb.ts:703

___

### shiftId

• **shiftId**: `bigint` = `protoInt64.zero`

Stores the shift ID

**`Generated`**

from field: uint64 shift_id = 11;

#### Defined in

src/shifts_groups.scailo_pb.ts:710

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/shifts_groups.scailo_pb.ts:719

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/shifts_groups.scailo_pb.ts:717

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsShiftsHistoryRequest"``

#### Defined in

src/shifts_groups.scailo_pb.ts:718

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md) \| `PlainMessage`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md) \| `PlainMessage`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md) \| `PlainMessage`\<[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/shifts_groups.scailo_pb.ts:736

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:724

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:728

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsHistoryRequest`](ShiftsGroupsShiftsHistoryRequest.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:732
