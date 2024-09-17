[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceCreateRequest

# Class: OutwardJobsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.OutwardJobsServiceCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\>

  ↳ **`OutwardJobsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceCreateRequest.md#constructor)

### Properties

- [consigneeLocationId](OutwardJobsServiceCreateRequest.md#consigneelocationid)
- [entityUuid](OutwardJobsServiceCreateRequest.md#entityuuid)
- [formData](OutwardJobsServiceCreateRequest.md#formdata)
- [projectId](OutwardJobsServiceCreateRequest.md#projectid)
- [referenceId](OutwardJobsServiceCreateRequest.md#referenceid)
- [userComment](OutwardJobsServiceCreateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsServiceCreateRequest.md#vaultfolderid)
- [vendorId](OutwardJobsServiceCreateRequest.md#vendorid)
- [fields](OutwardJobsServiceCreateRequest.md#fields)
- [runtime](OutwardJobsServiceCreateRequest.md#runtime)
- [typeName](OutwardJobsServiceCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceCreateRequest.md#clone)
- [equals](OutwardJobsServiceCreateRequest.md#equals)
- [fromBinary](OutwardJobsServiceCreateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceCreateRequest.md#gettype)
- [toBinary](OutwardJobsServiceCreateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceCreateRequest.md#tojson)
- [toJson](OutwardJobsServiceCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceCreateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceCreateRequest**(`data?`): [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\> |

#### Returns

[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:409

## Properties

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:386

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:358

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/outward_jobs.scailo_pb.ts:407

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

src/outward_jobs.scailo_pb.ts:400

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:379

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:365

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs.scailo_pb.ts:372

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:393

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:416

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:414

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceCreateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:415

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:439

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:427

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:431

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceCreateRequest`](OutwardJobsServiceCreateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:435
