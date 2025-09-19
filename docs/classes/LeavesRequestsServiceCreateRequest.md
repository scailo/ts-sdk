[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceCreateRequest

# Class: LeavesRequestsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.LeavesRequestsServiceCreateRequest

## Hierarchy

- `Message`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\>

  ↳ **`LeavesRequestsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceCreateRequest.md#constructor)

### Properties

- [description](LeavesRequestsServiceCreateRequest.md#description)
- [entityUuid](LeavesRequestsServiceCreateRequest.md#entityuuid)
- [formData](LeavesRequestsServiceCreateRequest.md#formdata)
- [fromTimestamp](LeavesRequestsServiceCreateRequest.md#fromtimestamp)
- [leaveTypeId](LeavesRequestsServiceCreateRequest.md#leavetypeid)
- [referenceId](LeavesRequestsServiceCreateRequest.md#referenceid)
- [toTimestamp](LeavesRequestsServiceCreateRequest.md#totimestamp)
- [userComment](LeavesRequestsServiceCreateRequest.md#usercomment)
- [userId](LeavesRequestsServiceCreateRequest.md#userid)
- [vaultFolderId](LeavesRequestsServiceCreateRequest.md#vaultfolderid)
- [fields](LeavesRequestsServiceCreateRequest.md#fields)
- [runtime](LeavesRequestsServiceCreateRequest.md#runtime)
- [typeName](LeavesRequestsServiceCreateRequest.md#typename)

### Methods

- [clone](LeavesRequestsServiceCreateRequest.md#clone)
- [equals](LeavesRequestsServiceCreateRequest.md#equals)
- [fromBinary](LeavesRequestsServiceCreateRequest.md#frombinary)
- [fromJson](LeavesRequestsServiceCreateRequest.md#fromjson)
- [fromJsonString](LeavesRequestsServiceCreateRequest.md#fromjsonstring)
- [getType](LeavesRequestsServiceCreateRequest.md#gettype)
- [toBinary](LeavesRequestsServiceCreateRequest.md#tobinary)
- [toJSON](LeavesRequestsServiceCreateRequest.md#tojson)
- [toJson](LeavesRequestsServiceCreateRequest.md#tojson-1)
- [toJsonString](LeavesRequestsServiceCreateRequest.md#tojsonstring)
- [equals](LeavesRequestsServiceCreateRequest.md#equals-1)
- [fromBinary](LeavesRequestsServiceCreateRequest.md#frombinary-1)
- [fromJson](LeavesRequestsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceCreateRequest**(`data?`): [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\> |

#### Returns

[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Overrides

Message\&lt;LeavesRequestsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/leaves_requests.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L203)

## Properties

### description

• **description**: `string` = `""`

The description of the leave request

**`Generated`**

from field: string description = 15;

#### Defined in

[src/leaves_requests.scailo_pb.ts:194](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L194)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_requests.scailo_pb.ts:138](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L138)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/leaves_requests.scailo_pb.ts:201](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L201)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave begins

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

[src/leaves_requests.scailo_pb.ts:180](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L180)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 12;

#### Defined in

[src/leaves_requests.scailo_pb.ts:173](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L173)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the leave request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_requests.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L159)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave ends

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

[src/leaves_requests.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L187)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/leaves_requests.scailo_pb.ts:145](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L145)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/leaves_requests.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L166)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/leaves_requests.scailo_pb.ts:152](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L152)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L210)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L208)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceCreateRequest"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L209)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L235)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L223)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:227](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L227)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCreateRequest`](LeavesRequestsServiceCreateRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L231)
