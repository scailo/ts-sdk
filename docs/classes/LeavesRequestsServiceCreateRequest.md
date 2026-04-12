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

[src/leaves_requests.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L230)

## Properties

### description

• **description**: `string` = `""`

The description of the leave request

**`Generated`**

from field: string description = 15;

#### Defined in

[src/leaves_requests.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L221)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_requests.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L147)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/leaves_requests.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L228)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave begins

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

[src/leaves_requests.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L207)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 12;

#### Defined in

[src/leaves_requests.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L200)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_requests.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L186)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave ends

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

[src/leaves_requests.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L214)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/leaves_requests.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L154)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/leaves_requests.scailo_pb.ts:193](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L193)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/leaves_requests.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L170)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L237)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L235)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceCreateRequest"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L236)

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

[src/leaves_requests.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L262)

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

[src/leaves_requests.scailo_pb.ts:250](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L250)

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

[src/leaves_requests.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L254)

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

[src/leaves_requests.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_requests.scailo_pb.ts#L258)
