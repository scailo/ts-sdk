[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceShiftGroupUpdateRequest

# Class: ShiftsGroupsServiceShiftGroupUpdateRequest

Describes the parameters required to update a shift in a shift group

**`Generated`**

from message Scailo.ShiftsGroupsServiceShiftGroupUpdateRequest

## Hierarchy

- `Message`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\>

  ↳ **`ShiftsGroupsServiceShiftGroupUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceShiftGroupUpdateRequest.md#constructor)

### Properties

- [id](ShiftsGroupsServiceShiftGroupUpdateRequest.md#id)
- [shiftGroupId](ShiftsGroupsServiceShiftGroupUpdateRequest.md#shiftgroupid)
- [shiftId](ShiftsGroupsServiceShiftGroupUpdateRequest.md#shiftid)
- [userComment](ShiftsGroupsServiceShiftGroupUpdateRequest.md#usercomment)
- [fields](ShiftsGroupsServiceShiftGroupUpdateRequest.md#fields)
- [runtime](ShiftsGroupsServiceShiftGroupUpdateRequest.md#runtime)
- [typeName](ShiftsGroupsServiceShiftGroupUpdateRequest.md#typename)

### Methods

- [clone](ShiftsGroupsServiceShiftGroupUpdateRequest.md#clone)
- [equals](ShiftsGroupsServiceShiftGroupUpdateRequest.md#equals)
- [fromBinary](ShiftsGroupsServiceShiftGroupUpdateRequest.md#frombinary)
- [fromJson](ShiftsGroupsServiceShiftGroupUpdateRequest.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceShiftGroupUpdateRequest.md#fromjsonstring)
- [getType](ShiftsGroupsServiceShiftGroupUpdateRequest.md#gettype)
- [toBinary](ShiftsGroupsServiceShiftGroupUpdateRequest.md#tobinary)
- [toJSON](ShiftsGroupsServiceShiftGroupUpdateRequest.md#tojson)
- [toJson](ShiftsGroupsServiceShiftGroupUpdateRequest.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceShiftGroupUpdateRequest.md#tojsonstring)
- [equals](ShiftsGroupsServiceShiftGroupUpdateRequest.md#equals-1)
- [fromBinary](ShiftsGroupsServiceShiftGroupUpdateRequest.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceShiftGroupUpdateRequest.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceShiftGroupUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceShiftGroupUpdateRequest**(`data?`): [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Overrides

Message\&lt;ShiftsGroupsServiceShiftGroupUpdateRequest\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L486)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/shifts_groups.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L470)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 10;

#### Defined in

[src/shifts_groups.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L477)

___

### shiftId

• **shiftId**: `bigint` = `protoInt64.zero`

Stores the shift ID

**`Generated`**

from field: uint64 shift_id = 11;

#### Defined in

[src/shifts_groups.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L484)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/shifts_groups.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L463)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L493)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L491)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServiceShiftGroupUpdateRequest"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L492)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L512)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L500)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L504)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceShiftGroupUpdateRequest`](ShiftsGroupsServiceShiftGroupUpdateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L508)
