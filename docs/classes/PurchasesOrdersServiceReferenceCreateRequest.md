[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceReferenceCreateRequest

# Class: PurchasesOrdersServiceReferenceCreateRequest

Describes the parameters necessary to create a purchase order reference

**`Generated`**

from message Scailo.PurchasesOrdersServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\>

  ↳ **`PurchasesOrdersServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceReferenceCreateRequest.md#constructor)

### Properties

- [context](PurchasesOrdersServiceReferenceCreateRequest.md#context)
- [purchaseOrderId](PurchasesOrdersServiceReferenceCreateRequest.md#purchaseorderid)
- [refFrom](PurchasesOrdersServiceReferenceCreateRequest.md#reffrom)
- [refId](PurchasesOrdersServiceReferenceCreateRequest.md#refid)
- [userComment](PurchasesOrdersServiceReferenceCreateRequest.md#usercomment)
- [fields](PurchasesOrdersServiceReferenceCreateRequest.md#fields)
- [runtime](PurchasesOrdersServiceReferenceCreateRequest.md#runtime)
- [typeName](PurchasesOrdersServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceReferenceCreateRequest.md#clone)
- [equals](PurchasesOrdersServiceReferenceCreateRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceReferenceCreateRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceReferenceCreateRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceReferenceCreateRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceReferenceCreateRequest.md#tojson)
- [toJson](PurchasesOrdersServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceReferenceCreateRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceReferenceCreateRequest**(`data?`): [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:2545

## Properties

### context

• **context**: [`PURCHASE_ORDER_REFERENCE_CONTEXT`](../enums/PURCHASE_ORDER_REFERENCE_CONTEXT.md) = `PURCHASE_ORDER_REFERENCE_CONTEXT.PURCHASE_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED`

The reference context, could be billing or buying

**`Generated`**

from field: Scailo.PURCHASE_ORDER_REFERENCE_CONTEXT context = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:2529

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:2522

___

### refFrom

• **refFrom**: [`PURCHASE_ORDER_REFERENCE_REF_FROM`](../enums/PURCHASE_ORDER_REFERENCE_REF_FROM.md) = `PURCHASE_ORDER_REFERENCE_REF_FROM.PURCHASE_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED`

The associated ref from

**`Generated`**

from field: Scailo.PURCHASE_ORDER_REFERENCE_REF_FROM ref_from = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:2536

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:2543

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:2515

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:2552

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:2550

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceReferenceCreateRequest"``

#### Defined in

src/purchases_orders.scailo_pb.ts:2551

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:2572

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2560

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2564

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceReferenceCreateRequest`](PurchasesOrdersServiceReferenceCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:2568
