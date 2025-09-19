[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceUpdateRequest

# Class: GoalsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.GoalsServiceUpdateRequest

## Hierarchy

- `Message`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\>

  ↳ **`GoalsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoalsServiceUpdateRequest.md#constructor)

### Properties

- [description](GoalsServiceUpdateRequest.md#description)
- [endDate](GoalsServiceUpdateRequest.md#enddate)
- [formData](GoalsServiceUpdateRequest.md#formdata)
- [id](GoalsServiceUpdateRequest.md#id)
- [notifyUsers](GoalsServiceUpdateRequest.md#notifyusers)
- [referenceId](GoalsServiceUpdateRequest.md#referenceid)
- [startDate](GoalsServiceUpdateRequest.md#startdate)
- [userComment](GoalsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](GoalsServiceUpdateRequest.md#vaultfolderid)
- [fields](GoalsServiceUpdateRequest.md#fields)
- [runtime](GoalsServiceUpdateRequest.md#runtime)
- [typeName](GoalsServiceUpdateRequest.md#typename)

### Methods

- [clone](GoalsServiceUpdateRequest.md#clone)
- [equals](GoalsServiceUpdateRequest.md#equals)
- [fromBinary](GoalsServiceUpdateRequest.md#frombinary)
- [fromJson](GoalsServiceUpdateRequest.md#fromjson)
- [fromJsonString](GoalsServiceUpdateRequest.md#fromjsonstring)
- [getType](GoalsServiceUpdateRequest.md#gettype)
- [toBinary](GoalsServiceUpdateRequest.md#tobinary)
- [toJSON](GoalsServiceUpdateRequest.md#tojson)
- [toJson](GoalsServiceUpdateRequest.md#tojson-1)
- [toJsonString](GoalsServiceUpdateRequest.md#tojsonstring)
- [equals](GoalsServiceUpdateRequest.md#equals-1)
- [fromBinary](GoalsServiceUpdateRequest.md#frombinary-1)
- [fromJson](GoalsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](GoalsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceUpdateRequest**(`data?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Overrides

Message\&lt;GoalsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L415)

## Properties

### description

• **description**: `string` = `""`

The description of the goal

**`Generated`**

from field: string description = 20;

#### Defined in

[src/goals.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L406)

___

### endDate

• **endDate**: `string` = `""`

The date until which the goal remains into force

**`Generated`**

from field: string end_date = 14;

#### Defined in

[src/goals.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L399)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/goals.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L413)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/goals.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L364)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/goals.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L371)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goal

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/goals.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L385)

___

### startDate

• **startDate**: `string` = `""`

The date from which the goal comes into force

**`Generated`**

from field: string start_date = 13;

#### Defined in

[src/goals.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L392)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goals.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L357)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/goals.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L422)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L420)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceUpdateRequest"``

#### Defined in

[src/goals.scailo_pb.ts:421](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L421)

## Methods

### clone

▸ **clone**(): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L446)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L434)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L438)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L442)
