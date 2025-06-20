[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceReference

# Class: SalesInvoiceReference

Describes the parameters that constitute a sales invoice reference

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

src/sales_invoices.scailo_pb.ts:2432

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:2402

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:2388

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: uint64 goods_dispatch_id = 11;

#### Defined in

src/sales_invoices.scailo_pb.ts:2430

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales invoice

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:2395

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_invoices.scailo_pb.ts:2409

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

Stores the sales invoice ID

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:2423

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_invoices.scailo_pb.ts:2416

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:2439

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:2437

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceReference"``

#### Defined in

src/sales_invoices.scailo_pb.ts:2438

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

src/sales_invoices.scailo_pb.ts:2461

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

src/sales_invoices.scailo_pb.ts:2449

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

src/sales_invoices.scailo_pb.ts:2453

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

src/sales_invoices.scailo_pb.ts:2457
