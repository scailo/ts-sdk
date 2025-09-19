[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceUpdateRequest

# Class: ShiftsGroupsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ShiftsGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\>

  ↳ **`ShiftsGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](ShiftsGroupsServiceUpdateRequest.md#code)
- [description](ShiftsGroupsServiceUpdateRequest.md#description)
- [id](ShiftsGroupsServiceUpdateRequest.md#id)
- [name](ShiftsGroupsServiceUpdateRequest.md#name)
- [notifyUsers](ShiftsGroupsServiceUpdateRequest.md#notifyusers)
- [userComment](ShiftsGroupsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ShiftsGroupsServiceUpdateRequest.md#vaultfolderid)
- [fields](ShiftsGroupsServiceUpdateRequest.md#fields)
- [runtime](ShiftsGroupsServiceUpdateRequest.md#runtime)
- [typeName](ShiftsGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](ShiftsGroupsServiceUpdateRequest.md#clone)
- [equals](ShiftsGroupsServiceUpdateRequest.md#equals)
- [fromBinary](ShiftsGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](ShiftsGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](ShiftsGroupsServiceUpdateRequest.md#gettype)
- [toBinary](ShiftsGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](ShiftsGroupsServiceUpdateRequest.md#tojson)
- [toJson](ShiftsGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](ShiftsGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](ShiftsGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceUpdateRequest**(`data?`): [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\> |

#### Returns

[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ShiftsGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L237)

## Properties

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shifts_groups.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L228)

___

### description

• **description**: `string` = `""`

The description of the shift group

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shifts_groups.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L235)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/shifts_groups.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L200)

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shifts_groups.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L221)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/shifts_groups.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L207)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/shifts_groups.scailo_pb.ts:193](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L193)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/shifts_groups.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L214)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L244)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L242)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServiceUpdateRequest"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L243)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L266)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L254)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L258)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceUpdateRequest`](ShiftsGroupsServiceUpdateRequest.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L262)
