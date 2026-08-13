[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceReference

# Class: SalesInvoiceReference

Represents the finalized state of a reference mapping between a Sales Invoice and a Goods Dispatch.
This entity securely binds the physical outbound fulfillment record to the billing document,
maintaining an explicit audit trail that supports accounting reconciliation and resolves proof-of-delivery disputes.

**`Generated`**

from message Scailo.SalesInvoiceReference

## Hierarchy

- `Message`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\>

  ↳ **`SalesInvoiceReference`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceReference.md#constructor)

### Properties

- [approvalMetadata](SalesInvoiceReference.md#approvalmetadata)
- [entityUuid](SalesInvoiceReference.md#entityuuid)
- [goodsDispatchId](SalesInvoiceReference.md#goodsdispatchid)
- [metadata](SalesInvoiceReference.md#metadata)
- [needApproval](SalesInvoiceReference.md#needapproval)
- [salesInvoiceId](SalesInvoiceReference.md#salesinvoiceid)
- [userComment](SalesInvoiceReference.md#usercomment)
- [fields](SalesInvoiceReference.md#fields)
- [runtime](SalesInvoiceReference.md#runtime)
- [typeName](SalesInvoiceReference.md#typename)

### Methods

- [clone](SalesInvoiceReference.md#clone)
- [equals](SalesInvoiceReference.md#equals)
- [fromBinary](SalesInvoiceReference.md#frombinary)
- [fromJson](SalesInvoiceReference.md#fromjson)
- [fromJsonString](SalesInvoiceReference.md#fromjsonstring)
- [getType](SalesInvoiceReference.md#gettype)
- [toBinary](SalesInvoiceReference.md#tobinary)
- [toJSON](SalesInvoiceReference.md#tojson)
- [toJson](SalesInvoiceReference.md#tojson-1)
- [toJsonString](SalesInvoiceReference.md#tojsonstring)
- [equals](SalesInvoiceReference.md#equals-1)
- [fromBinary](SalesInvoiceReference.md#frombinary-1)
- [fromJson](SalesInvoiceReference.md#fromjson-1)
- [fromJsonString](SalesInvoiceReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceReference**(`data?`): [`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\> |

#### Returns

[`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Overrides

Message\&lt;SalesInvoiceReference\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:4167](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4167)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4117](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4117)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4101](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4101)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the mapped Goods Dispatch document that proves physical fulfillment.

**`Example`**

```ts
450
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 goods_dispatch_id = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4165](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4165)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4109](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4109)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4129](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4129)

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales invoice to which this reference belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4149](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4149)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"Attached dispatch #450 as proof of physical fulfillment."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4139](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4139)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4174](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4174)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4172](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4172)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceReference"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:4173](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4173)

## Methods

### clone

▸ **clone**(): [`SalesInvoiceReference`](SalesInvoiceReference.md)

Create a deep copy.

#### Returns

[`SalesInvoiceReference`](SalesInvoiceReference.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceReference`](SalesInvoiceReference.md) \| `PlainMessage`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceReference`](SalesInvoiceReference.md) \| `PlainMessage`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\> |
| `b` | `undefined` \| [`SalesInvoiceReference`](SalesInvoiceReference.md) \| `PlainMessage`\<[`SalesInvoiceReference`](SalesInvoiceReference.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4196](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4196)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4184](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4184)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4188](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4188)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceReference`](SalesInvoiceReference.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4192](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L4192)
