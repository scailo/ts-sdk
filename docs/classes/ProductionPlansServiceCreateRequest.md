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

src/production_plans.scailo_pb.ts:347

## Properties

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 17;

#### Defined in

src/production_plans.scailo_pb.ts:338

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/production_plans.scailo_pb.ts:268

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/production_plans.scailo_pb.ts:345

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

src/production_plans.scailo_pb.ts:317

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

src/production_plans.scailo_pb.ts:282

___

### refFrom

• **refFrom**: [`PRODUCTION_PLAN_REF_FROM`](../enums/PRODUCTION_PLAN_REF_FROM.md) = `PRODUCTION_PLAN_REF_FROM.PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 12;

#### Defined in

src/production_plans.scailo_pb.ts:303

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/production_plans.scailo_pb.ts:310

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/production_plans.scailo_pb.ts:296

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 16;

#### Defined in

src/production_plans.scailo_pb.ts:331

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

src/production_plans.scailo_pb.ts:324

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/production_plans.scailo_pb.ts:275

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/production_plans.scailo_pb.ts:289

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:354

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:352

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceCreateRequest"``

#### Defined in

src/production_plans.scailo_pb.ts:353

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

src/production_plans.scailo_pb.ts:381

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

src/production_plans.scailo_pb.ts:369

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

src/production_plans.scailo_pb.ts:373

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

src/production_plans.scailo_pb.ts:377
