[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest

Describes the parameters required to add an item to a outward job free issue material return

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#familyid)
- [internalQuantity](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#internalquantity)
- [itemHash](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#itemhash)
- [outwardJobFreeIssueMaterialReturnId](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#outwardjobfreeissuematerialreturnid)
- [userComment](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#usercomment)
- [vendorQuantity](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#vendorquantity)
- [vendorUomId](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#vendoruomid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:652

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:622

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:636

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:629

___

### outwardJobFreeIssueMaterialReturnId

• **outwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material return ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_return_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:615

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:608

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:650

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:643

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:659

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:657

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:658

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:681

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:669

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:673

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:677
