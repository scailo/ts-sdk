[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceCreateRequest

# Class: ProductionPlansServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ProductionPlansServiceCreateRequest

## Hierarchy

- `Message`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\>

  ↳ **`ProductionPlansServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceCreateRequest.md#constructor)

### Properties

- [endsAt](ProductionPlansServiceCreateRequest.md#endsat)
- [entityUuid](ProductionPlansServiceCreateRequest.md#entityuuid)
- [formData](ProductionPlansServiceCreateRequest.md#formdata)
- [locationId](ProductionPlansServiceCreateRequest.md#locationid)
- [projectId](ProductionPlansServiceCreateRequest.md#projectid)
- [refFrom](ProductionPlansServiceCreateRequest.md#reffrom)
- [refId](ProductionPlansServiceCreateRequest.md#refid)
- [referenceId](ProductionPlansServiceCreateRequest.md#referenceid)
- [startsAt](ProductionPlansServiceCreateRequest.md#startsat)
- [supervisor](ProductionPlansServiceCreateRequest.md#supervisor)
- [userComment](ProductionPlansServiceCreateRequest.md#usercomment)
- [vaultFolderId](ProductionPlansServiceCreateRequest.md#vaultfolderid)
- [fields](ProductionPlansServiceCreateRequest.md#fields)
- [runtime](ProductionPlansServiceCreateRequest.md#runtime)
- [typeName](ProductionPlansServiceCreateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceCreateRequest.md#clone)
- [equals](ProductionPlansServiceCreateRequest.md#equals)
- [fromBinary](ProductionPlansServiceCreateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceCreateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceCreateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceCreateRequest.md#gettype)
- [toBinary](ProductionPlansServiceCreateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceCreateRequest.md#tojson)
- [toJson](ProductionPlansServiceCreateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceCreateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceCreateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceCreateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceCreateRequest**(`data?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Overrides

Message\&lt;ProductionPlansServiceCreateRequest\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L390)

## Properties

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 17;

#### Defined in

[src/production_plans.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L374)

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

[src/production_plans.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L277)

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

[src/production_plans.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L388)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/production_plans.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L353)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/production_plans.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L300)

___

### refFrom

• **refFrom**: [`PRODUCTION_PLAN_REF_FROM`](../enums/PRODUCTION_PLAN_REF_FROM.md) = `PRODUCTION_PLAN_REF_FROM.PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 12;

#### Defined in

[src/production_plans.scailo_pb.ts:339](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L339)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/production_plans.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L346)

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

[src/production_plans.scailo_pb.ts:332](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L332)

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 16;

#### Defined in

[src/production_plans.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L367)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_plans.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L360)

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

[src/production_plans.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L293)

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

[src/production_plans.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L316)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L397)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L395)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceCreateRequest"``

#### Defined in

[src/production_plans.scailo_pb.ts:396](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L396)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L424)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Defined in

[src/production_plans.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L412)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Defined in

[src/production_plans.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L416)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Defined in

[src/production_plans.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/production_plans.scailo_pb.ts#L420)
