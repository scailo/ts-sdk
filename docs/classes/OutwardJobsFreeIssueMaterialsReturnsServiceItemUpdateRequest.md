[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest

Describes the parameters required to update an item in a outward job free issue material return

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#id)
- [internalQuantity](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#internalquantity)
- [itemHash](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#itemhash)
- [userComment](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#vendorquantity)
- [vendorUomId](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#vendoruomid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:735

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:705

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:719

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:712

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:698

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:733

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:726

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:742

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:740

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:741

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:763

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:751

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:755

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:759
