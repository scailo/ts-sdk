[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceUpdateRequest

# Class: OvertimesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.OvertimesServiceUpdateRequest

## Hierarchy

- `Message`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\>

  ↳ **`OvertimesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceUpdateRequest.md#constructor)

### Properties

- [description](OvertimesServiceUpdateRequest.md#description)
- [formData](OvertimesServiceUpdateRequest.md#formdata)
- [fromTimestamp](OvertimesServiceUpdateRequest.md#fromtimestamp)
- [id](OvertimesServiceUpdateRequest.md#id)
- [notifyUsers](OvertimesServiceUpdateRequest.md#notifyusers)
- [referenceId](OvertimesServiceUpdateRequest.md#referenceid)
- [toTimestamp](OvertimesServiceUpdateRequest.md#totimestamp)
- [userComment](OvertimesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](OvertimesServiceUpdateRequest.md#vaultfolderid)
- [fields](OvertimesServiceUpdateRequest.md#fields)
- [runtime](OvertimesServiceUpdateRequest.md#runtime)
- [typeName](OvertimesServiceUpdateRequest.md#typename)

### Methods

- [clone](OvertimesServiceUpdateRequest.md#clone)
- [equals](OvertimesServiceUpdateRequest.md#equals)
- [fromBinary](OvertimesServiceUpdateRequest.md#frombinary)
- [fromJson](OvertimesServiceUpdateRequest.md#fromjson)
- [fromJsonString](OvertimesServiceUpdateRequest.md#fromjsonstring)
- [getType](OvertimesServiceUpdateRequest.md#gettype)
- [toBinary](OvertimesServiceUpdateRequest.md#tobinary)
- [toJSON](OvertimesServiceUpdateRequest.md#tojson)
- [toJson](OvertimesServiceUpdateRequest.md#tojson-1)
- [toJsonString](OvertimesServiceUpdateRequest.md#tojsonstring)
- [equals](OvertimesServiceUpdateRequest.md#equals-1)
- [fromBinary](OvertimesServiceUpdateRequest.md#frombinary-1)
- [fromJson](OvertimesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](OvertimesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceUpdateRequest**(`data?`): [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\> |

#### Returns

[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Overrides

Message\&lt;OvertimesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L294)

## Properties

### description

• **description**: `string` = `""`

The description of the overtime

**`Generated`**

from field: string description = 14;

#### Defined in

[src/overtimes.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L285)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/overtimes.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L292)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime begins

**`Generated`**

from field: uint64 from_timestamp = 12;

#### Defined in

[src/overtimes.scailo_pb.ts:271](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L271)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/overtimes.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L243)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/overtimes.scailo_pb.ts:250](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L250)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the overtime

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/overtimes.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L264)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime ends

**`Generated`**

from field: uint64 to_timestamp = 13;

#### Defined in

[src/overtimes.scailo_pb.ts:278](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L278)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/overtimes.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L236)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/overtimes.scailo_pb.ts:257](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L257)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L301)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:299](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L299)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServiceUpdateRequest"``

#### Defined in

[src/overtimes.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L300)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md) \| `PlainMessage`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md) \| `PlainMessage`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md) \| `PlainMessage`\<[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L325)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Defined in

[src/overtimes.scailo_pb.ts:313](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L313)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Defined in

[src/overtimes.scailo_pb.ts:317](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L317)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceUpdateRequest`](OvertimesServiceUpdateRequest.md)

#### Defined in

[src/overtimes.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/overtimes.scailo_pb.ts#L321)
