[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceShiftGroupCreateRequest

# Class: ShiftsGroupsServiceShiftGroupCreateRequest

Describes the parameters required to add a shift to a shift group

**`Generated`**

from message Scailo.ShiftsGroupsServiceShiftGroupCreateRequest

## Hierarchy

- `Message`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\>

  ↳ **`ShiftsGroupsServiceShiftGroupCreateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceShiftGroupCreateRequest.md#constructor)

### Properties

- [shiftGroupId](ShiftsGroupsServiceShiftGroupCreateRequest.md#shiftgroupid)
- [shiftId](ShiftsGroupsServiceShiftGroupCreateRequest.md#shiftid)
- [userComment](ShiftsGroupsServiceShiftGroupCreateRequest.md#usercomment)
- [fields](ShiftsGroupsServiceShiftGroupCreateRequest.md#fields)
- [runtime](ShiftsGroupsServiceShiftGroupCreateRequest.md#runtime)
- [typeName](ShiftsGroupsServiceShiftGroupCreateRequest.md#typename)

### Methods

- [clone](ShiftsGroupsServiceShiftGroupCreateRequest.md#clone)
- [equals](ShiftsGroupsServiceShiftGroupCreateRequest.md#equals)
- [fromBinary](ShiftsGroupsServiceShiftGroupCreateRequest.md#frombinary)
- [fromJson](ShiftsGroupsServiceShiftGroupCreateRequest.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceShiftGroupCreateRequest.md#fromjsonstring)
- [getType](ShiftsGroupsServiceShiftGroupCreateRequest.md#gettype)
- [toBinary](ShiftsGroupsServiceShiftGroupCreateRequest.md#tobinary)
- [toJSON](ShiftsGroupsServiceShiftGroupCreateRequest.md#tojson)
- [toJson](ShiftsGroupsServiceShiftGroupCreateRequest.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceShiftGroupCreateRequest.md#tojsonstring)
- [equals](ShiftsGroupsServiceShiftGroupCreateRequest.md#equals-1)
- [fromBinary](ShiftsGroupsServiceShiftGroupCreateRequest.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceShiftGroupCreateRequest.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceShiftGroupCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceShiftGroupCreateRequest**(`data?`): [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Overrides

Message\&lt;ShiftsGroupsServiceShiftGroupCreateRequest\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:421](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L421)

## Properties

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 10;

#### Defined in

[src/shifts_groups.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L412)

___

### shiftId

• **shiftId**: `bigint` = `protoInt64.zero`

Stores the shift ID

**`Generated`**

from field: uint64 shift_id = 11;

#### Defined in

[src/shifts_groups.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L419)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/shifts_groups.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L405)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L428)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L426)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServiceShiftGroupCreateRequest"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L427)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L446)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L434)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L438)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupCreateRequest`](ShiftsGroupsServiceShiftGroupCreateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L442)
