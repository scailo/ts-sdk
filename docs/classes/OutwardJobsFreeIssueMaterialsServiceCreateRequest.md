[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceCreateRequest

# Class: OutwardJobsFreeIssueMaterialsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#entityuuid)
- [formData](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#formdata)
- [locationId](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#locationid)
- [refFrom](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#referenceid)
- [userComment](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#vaultfolderid)
- [fields](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceCreateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:291

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:240

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:289

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:282

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:268

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:275

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:261

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:247

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:254

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:298

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:296

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceCreateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:297

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:321

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:309

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:313

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsServiceCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:317
