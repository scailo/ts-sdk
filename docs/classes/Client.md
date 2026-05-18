[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Client

# Class: Client

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Client

## Hierarchy

- `Message`\<[`Client`](Client.md)\>

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [approvalMetadata](Client.md#approvalmetadata)
- [code](Client.md#code)
- [email](Client.md#email)
- [entityUuid](Client.md#entityuuid)
- [formData](Client.md#formdata)
- [logs](Client.md#logs)
- [metadata](Client.md#metadata)
- [name](Client.md#name)
- [phone](Client.md#phone)
- [status](Client.md#status)
- [vaultFolderId](Client.md#vaultfolderid)
- [fields](Client.md#fields)
- [runtime](Client.md#runtime)
- [typeName](Client.md#typename)

### Methods

- [clone](Client.md#clone)
- [equals](Client.md#equals)
- [fromBinary](Client.md#frombinary)
- [fromJson](Client.md#fromjson)
- [fromJsonString](Client.md#fromjsonstring)
- [getType](Client.md#gettype)
- [toBinary](Client.md#tobinary)
- [toJSON](Client.md#tojson)
- [toJson](Client.md#tojson-1)
- [toJsonString](Client.md#tojsonstring)
- [equals](Client.md#equals-1)
- [fromBinary](Client.md#frombinary-1)
- [fromJson](Client.md#fromjson-1)
- [fromJsonString](Client.md#fromjsonstring-1)

## Constructors

### constructor

• **new Client**(`data?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Client`](Client.md)\> |

#### Returns

[`Client`](Client.md)

#### Overrides

Message\&lt;Client\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L467)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/clients.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L404)

___

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/clients.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L444)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 12;

#### Defined in

[src/clients.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L451)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/clients.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L388)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/clients.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L465)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/clients.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L420)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/clients.scailo_pb.ts:396](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L396)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 10;

#### Defined in

[src/clients.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L437)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/clients.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L458)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/clients.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L412)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/clients.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L430)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L474)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L472)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Client"``

#### Defined in

[src/clients.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L473)

## Methods

### clone

▸ **clone**(): [`Client`](Client.md)

Create a deep copy.

#### Returns

[`Client`](Client.md)

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
| `other` | `undefined` \| ``null`` \| [`Client`](Client.md) \| `PlainMessage`\<[`Client`](Client.md)\> |

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

▸ **getType**(): `MessageType`\<[`Client`](Client.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Client`](Client.md)\>

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
| `a` | `undefined` \| [`Client`](Client.md) \| `PlainMessage`\<[`Client`](Client.md)\> |
| `b` | `undefined` \| [`Client`](Client.md) \| `PlainMessage`\<[`Client`](Client.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L500)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/clients.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L488)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/clients.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L492)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[src/clients.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/clients.scailo_pb.ts#L496)
