[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

# Class: InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#entityuuid)
- [formData](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#formdata)
- [locationId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#locationid)
- [refFrom](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#referenceid)
- [userComment](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#usercomment)
- [vaultFolderId](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#vaultfolderid)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L345)

## Properties

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L276)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L343)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L336)

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L322)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L329)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L315)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L283)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:299](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L299)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L352)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L350)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L351)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L375)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L363)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L367)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L371)
