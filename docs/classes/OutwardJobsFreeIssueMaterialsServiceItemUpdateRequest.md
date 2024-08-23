[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest

# Class: OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest

Describes the parameters required to update an item in a outward job free issue material

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#id)
- [internalQuantity](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#internalquantity)
- [itemHash](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#itemhash)
- [userComment](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#usercomment)
- [vendorFamilyCode](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#vendorfamilycode)
- [vendorQuantity](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#vendorquantity)
- [vendorUomId](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#vendoruomid)
- [fields](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:766

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:729

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being received in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:743

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be sent

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:736

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:722

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the family code as defined by the vendor

**`Generated`**

from field: string vendor_family_code = 16;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:764

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being received in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:757

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:750

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:773

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:771

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:772

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:795

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:783

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:787

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:791
