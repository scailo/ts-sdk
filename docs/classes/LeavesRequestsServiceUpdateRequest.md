[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceUpdateRequest

# Class: LeavesRequestsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.LeavesRequestsServiceUpdateRequest

## Hierarchy

- `Message`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\>

  ↳ **`LeavesRequestsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceUpdateRequest.md#constructor)

### Properties

- [description](LeavesRequestsServiceUpdateRequest.md#description)
- [formData](LeavesRequestsServiceUpdateRequest.md#formdata)
- [fromTimestamp](LeavesRequestsServiceUpdateRequest.md#fromtimestamp)
- [id](LeavesRequestsServiceUpdateRequest.md#id)
- [leaveTypeId](LeavesRequestsServiceUpdateRequest.md#leavetypeid)
- [notifyUsers](LeavesRequestsServiceUpdateRequest.md#notifyusers)
- [referenceId](LeavesRequestsServiceUpdateRequest.md#referenceid)
- [toTimestamp](LeavesRequestsServiceUpdateRequest.md#totimestamp)
- [userComment](LeavesRequestsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](LeavesRequestsServiceUpdateRequest.md#vaultfolderid)
- [fields](LeavesRequestsServiceUpdateRequest.md#fields)
- [runtime](LeavesRequestsServiceUpdateRequest.md#runtime)
- [typeName](LeavesRequestsServiceUpdateRequest.md#typename)

### Methods

- [clone](LeavesRequestsServiceUpdateRequest.md#clone)
- [equals](LeavesRequestsServiceUpdateRequest.md#equals)
- [fromBinary](LeavesRequestsServiceUpdateRequest.md#frombinary)
- [fromJson](LeavesRequestsServiceUpdateRequest.md#fromjson)
- [fromJsonString](LeavesRequestsServiceUpdateRequest.md#fromjsonstring)
- [getType](LeavesRequestsServiceUpdateRequest.md#gettype)
- [toBinary](LeavesRequestsServiceUpdateRequest.md#tobinary)
- [toJSON](LeavesRequestsServiceUpdateRequest.md#tojson)
- [toJson](LeavesRequestsServiceUpdateRequest.md#tojson-1)
- [toJsonString](LeavesRequestsServiceUpdateRequest.md#tojsonstring)
- [equals](LeavesRequestsServiceUpdateRequest.md#equals-1)
- [fromBinary](LeavesRequestsServiceUpdateRequest.md#frombinary-1)
- [fromJson](LeavesRequestsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceUpdateRequest**(`data?`): [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\> |

#### Returns

[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Overrides

Message\&lt;LeavesRequestsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/leaves_requests.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L367)

## Properties

### description

• **description**: `string` = `""`

The description of the leave request

**`Generated`**

from field: string description = 15;

#### Defined in

[src/leaves_requests.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L358)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/leaves_requests.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L365)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave begins

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

[src/leaves_requests.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L344)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/leaves_requests.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L286)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 12;

#### Defined in

[src/leaves_requests.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L337)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/leaves_requests.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L298)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_requests.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L330)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the leave ends

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

[src/leaves_requests.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L351)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/leaves_requests.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L279)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/leaves_requests.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L314)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L374)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L372)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceUpdateRequest"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:373](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L373)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md) \| `PlainMessage`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md) \| `PlainMessage`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md) \| `PlainMessage`\<[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L399)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L387)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L391)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceUpdateRequest`](LeavesRequestsServiceUpdateRequest.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_requests.scailo_pb.ts#L395)
