[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceItemCreateRequest

# Class: InwardJobsFreeIssueMaterialsServiceItemCreateRequest

Describes the parameters required to add an item to a inward job free issue material

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#clientquantity)
- [clientUomId](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#clientuomid)
- [familyId](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#familyid)
- [internalQuantity](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#internalquantity)
- [inwardJobFreeIssueMaterialId](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#inwardjobfreeissuematerialid)
- [userComment](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#usercomment)
- [fields](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceItemCreateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:713

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:711

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being received in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:704

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:697

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:683

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being received in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:690

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:676

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:669

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:720

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:718

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceItemCreateRequest"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:719

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:742

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:730

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:734

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:738
