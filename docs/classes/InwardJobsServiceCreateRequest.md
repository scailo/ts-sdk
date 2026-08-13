[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceCreateRequest

# Class: InwardJobsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.InwardJobsServiceCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\>

  ↳ **`InwardJobsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](InwardJobsServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](InwardJobsServiceCreateRequest.md#consigneeclientid)
- [entityUuid](InwardJobsServiceCreateRequest.md#entityuuid)
- [formData](InwardJobsServiceCreateRequest.md#formdata)
- [locationId](InwardJobsServiceCreateRequest.md#locationid)
- [projectId](InwardJobsServiceCreateRequest.md#projectid)
- [referenceId](InwardJobsServiceCreateRequest.md#referenceid)
- [userComment](InwardJobsServiceCreateRequest.md#usercomment)
- [vaultFolderId](InwardJobsServiceCreateRequest.md#vaultfolderid)
- [fields](InwardJobsServiceCreateRequest.md#fields)
- [runtime](InwardJobsServiceCreateRequest.md#runtime)
- [typeName](InwardJobsServiceCreateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceCreateRequest.md#clone)
- [equals](InwardJobsServiceCreateRequest.md#equals)
- [fromBinary](InwardJobsServiceCreateRequest.md#frombinary)
- [fromJson](InwardJobsServiceCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceCreateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceCreateRequest.md#gettype)
- [toBinary](InwardJobsServiceCreateRequest.md#tobinary)
- [toJSON](InwardJobsServiceCreateRequest.md#tojson)
- [toJson](InwardJobsServiceCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceCreateRequest.md#tojsonstring)
- [equals](InwardJobsServiceCreateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceCreateRequest**(`data?`): [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\> |

#### Returns

[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L515)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L485)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L478)

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

[src/inward_jobs.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L423)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/inward_jobs.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L513)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/inward_jobs.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L492)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 15;

#### Defined in

[src/inward_jobs.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L499)

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

[src/inward_jobs.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L471)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:439](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L439)

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

[src/inward_jobs.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L455)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L522)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L520)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceCreateRequest"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L521)

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L546)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L534)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L538)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceCreateRequest`](InwardJobsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L542)
