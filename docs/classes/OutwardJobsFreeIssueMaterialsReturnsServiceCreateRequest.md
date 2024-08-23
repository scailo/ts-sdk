[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#entityuuid)
- [formData](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#formdata)
- [locationId](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#locationid)
- [refFrom](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#referenceid)
- [userComment](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#vaultfolderid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:283

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:232

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:281

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:274

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:260

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:267

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:253

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:239

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:246

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:290

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:288

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:289

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:313

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:301

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:305

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:309
