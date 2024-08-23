[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderReference

# Class: SalesOrderReference

Describes the parameters that constitute a sales order reference

**`Generated`**

from message Scailo.SalesOrderReference

## Hierarchy

- `Message`\<[`SalesOrderReference`](SalesOrderReference.md)\>

  ↳ **`SalesOrderReference`**

## Table of contents

### Constructors

- [constructor](SalesOrderReference.md#constructor)

### Properties

- [approvalMetadata](SalesOrderReference.md#approvalmetadata)
- [context](SalesOrderReference.md#context)
- [entityUuid](SalesOrderReference.md#entityuuid)
- [metadata](SalesOrderReference.md#metadata)
- [needApproval](SalesOrderReference.md#needapproval)
- [refFrom](SalesOrderReference.md#reffrom)
- [refId](SalesOrderReference.md#refid)
- [salesOrderId](SalesOrderReference.md#salesorderid)
- [userComment](SalesOrderReference.md#usercomment)
- [fields](SalesOrderReference.md#fields)
- [runtime](SalesOrderReference.md#runtime)
- [typeName](SalesOrderReference.md#typename)

### Methods

- [clone](SalesOrderReference.md#clone)
- [equals](SalesOrderReference.md#equals)
- [fromBinary](SalesOrderReference.md#frombinary)
- [fromJson](SalesOrderReference.md#fromjson)
- [fromJsonString](SalesOrderReference.md#fromjsonstring)
- [getType](SalesOrderReference.md#gettype)
- [toBinary](SalesOrderReference.md#tobinary)
- [toJSON](SalesOrderReference.md#tojson)
- [toJson](SalesOrderReference.md#tojson-1)
- [toJsonString](SalesOrderReference.md#tojsonstring)
- [equals](SalesOrderReference.md#equals-1)
- [fromBinary](SalesOrderReference.md#frombinary-1)
- [fromJson](SalesOrderReference.md#fromjson-1)
- [fromJsonString](SalesOrderReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderReference**(`data?`): [`SalesOrderReference`](SalesOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderReference`](SalesOrderReference.md)\> |

#### Returns

[`SalesOrderReference`](SalesOrderReference.md)

#### Overrides

Message\&lt;SalesOrderReference\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:2562

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:2518

___

### context

• **context**: [`SALES_ORDER_REFERENCE_CONTEXT`](../enums/SALES_ORDER_REFERENCE_CONTEXT.md) = `SALES_ORDER_REFERENCE_CONTEXT.SALES_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED`

The reference context, could be billing or buying

**`Generated`**

from field: Scailo.SALES_ORDER_REFERENCE_CONTEXT context = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:2546

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:2504

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:2511

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_orders.scailo_pb.ts:2525

___

### refFrom

• **refFrom**: [`SALES_ORDER_REFERENCE_REF_FROM`](../enums/SALES_ORDER_REFERENCE_REF_FROM.md) = `SALES_ORDER_REFERENCE_REF_FROM.SALES_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED`

The associated ref from

**`Generated`**

from field: Scailo.SALES_ORDER_REFERENCE_REF_FROM ref_from = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:2553

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:2560

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:2539

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_orders.scailo_pb.ts:2532

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:2569

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:2567

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderReference"``

#### Defined in

src/sales_orders.scailo_pb.ts:2568

## Methods

### clone

▸ **clone**(): [`SalesOrderReference`](SalesOrderReference.md)

Create a deep copy.

#### Returns

[`SalesOrderReference`](SalesOrderReference.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderReference`](SalesOrderReference.md) \| `PlainMessage`\<[`SalesOrderReference`](SalesOrderReference.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderReference`](SalesOrderReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderReference`](SalesOrderReference.md)\>

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
| `a` | `undefined` \| [`SalesOrderReference`](SalesOrderReference.md) \| `PlainMessage`\<[`SalesOrderReference`](SalesOrderReference.md)\> |
| `b` | `undefined` \| [`SalesOrderReference`](SalesOrderReference.md) \| `PlainMessage`\<[`SalesOrderReference`](SalesOrderReference.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:2593

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderReference`](SalesOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderReference`](SalesOrderReference.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2581

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderReference`](SalesOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderReference`](SalesOrderReference.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2585

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderReference`](SalesOrderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderReference`](SalesOrderReference.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2589
