[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceItemCreateRequest

# Class: OutwardJobsFreeIssueMaterialsServiceItemCreateRequest

Describes the parameters required to add an item to a outward job free issue material

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#familyid)
- [internalQuantity](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#internalquantity)
- [itemHash](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#itemhash)
- [outwardJobFreeIssueMaterialId](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#outwardjobfreeissuematerialid)
- [userComment](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#usercomment)
- [vendorFamilyCode](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#vendorfamilycode)
- [vendorQuantity](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#vendorquantity)
- [vendorUomId](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#vendoruomid)
- [fields](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceItemCreateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:675

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:638

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being received in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:652

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be sent

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:645

___

### outwardJobFreeIssueMaterialId

• **outwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:631

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:624

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the family code as defined by the vendor

**`Generated`**

from field: string vendor_family_code = 16;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:673

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being received in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:666

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:659

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:682

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:680

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceItemCreateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:681

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:705

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:693

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:697

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsServiceItemCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:701
