[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderReference

# Class: PurchaseOrderReference

Describes the parameters that constitute a purchase order reference

**`Generated`**

from message Scailo.PurchaseOrderReference

## Hierarchy

- `Message`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\>

  ↳ **`PurchaseOrderReference`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderReference.md#constructor)

### Properties

- [approvalMetadata](PurchaseOrderReference.md#approvalmetadata)
- [context](PurchaseOrderReference.md#context)
- [entityUuid](PurchaseOrderReference.md#entityuuid)
- [metadata](PurchaseOrderReference.md#metadata)
- [needApproval](PurchaseOrderReference.md#needapproval)
- [purchaseOrderId](PurchaseOrderReference.md#purchaseorderid)
- [refFrom](PurchaseOrderReference.md#reffrom)
- [refId](PurchaseOrderReference.md#refid)
- [userComment](PurchaseOrderReference.md#usercomment)
- [fields](PurchaseOrderReference.md#fields)
- [runtime](PurchaseOrderReference.md#runtime)
- [typeName](PurchaseOrderReference.md#typename)

### Methods

- [clone](PurchaseOrderReference.md#clone)
- [equals](PurchaseOrderReference.md#equals)
- [fromBinary](PurchaseOrderReference.md#frombinary)
- [fromJson](PurchaseOrderReference.md#fromjson)
- [fromJsonString](PurchaseOrderReference.md#fromjsonstring)
- [getType](PurchaseOrderReference.md#gettype)
- [toBinary](PurchaseOrderReference.md#tobinary)
- [toJSON](PurchaseOrderReference.md#tojson)
- [toJson](PurchaseOrderReference.md#tojson-1)
- [toJsonString](PurchaseOrderReference.md#tojsonstring)
- [equals](PurchaseOrderReference.md#equals-1)
- [fromBinary](PurchaseOrderReference.md#frombinary-1)
- [fromJson](PurchaseOrderReference.md#fromjson-1)
- [fromJsonString](PurchaseOrderReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderReference**(`data?`): [`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\> |

#### Returns

[`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Overrides

Message\&lt;PurchaseOrderReference\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:2647

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/purchases_orders.scailo_pb.ts:2603

___

### context

• **context**: [`PURCHASE_ORDER_REFERENCE_CONTEXT`](../enums/PURCHASE_ORDER_REFERENCE_CONTEXT.md) = `PURCHASE_ORDER_REFERENCE_CONTEXT.PURCHASE_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED`

The reference context, could be billing or buying

**`Generated`**

from field: Scailo.PURCHASE_ORDER_REFERENCE_CONTEXT context = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:2631

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:2589

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:2596

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/purchases_orders.scailo_pb.ts:2610

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:2624

___

### refFrom

• **refFrom**: [`PURCHASE_ORDER_REFERENCE_REF_FROM`](../enums/PURCHASE_ORDER_REFERENCE_REF_FROM.md) = `PURCHASE_ORDER_REFERENCE_REF_FROM.PURCHASE_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED`

The associated ref from

**`Generated`**

from field: Scailo.PURCHASE_ORDER_REFERENCE_REF_FROM ref_from = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:2638

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:2645

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/purchases_orders.scailo_pb.ts:2617

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:2654

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:2652

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderReference"``

#### Defined in

src/purchases_orders.scailo_pb.ts:2653

## Methods

### clone

▸ **clone**(): [`PurchaseOrderReference`](PurchaseOrderReference.md)

Create a deep copy.

#### Returns

[`PurchaseOrderReference`](PurchaseOrderReference.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderReference`](PurchaseOrderReference.md) \| `PlainMessage`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderReference`](PurchaseOrderReference.md) \| `PlainMessage`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\> |
| `b` | `undefined` \| [`PurchaseOrderReference`](PurchaseOrderReference.md) \| `PlainMessage`\<[`PurchaseOrderReference`](PurchaseOrderReference.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:2678

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2666

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2670

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderReference`](PurchaseOrderReference.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2674
