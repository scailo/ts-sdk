[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationReference

# Class: SalesQuotationReference

Describes the parameters that constitute a sales quotation reference

**`Generated`**

from message Scailo.SalesQuotationReference

## Hierarchy

- `Message`\<[`SalesQuotationReference`](SalesQuotationReference.md)\>

  ↳ **`SalesQuotationReference`**

## Table of contents

### Constructors

- [constructor](SalesQuotationReference.md#constructor)

### Properties

- [approvalMetadata](SalesQuotationReference.md#approvalmetadata)
- [context](SalesQuotationReference.md#context)
- [entityUuid](SalesQuotationReference.md#entityuuid)
- [metadata](SalesQuotationReference.md#metadata)
- [needApproval](SalesQuotationReference.md#needapproval)
- [refFrom](SalesQuotationReference.md#reffrom)
- [refId](SalesQuotationReference.md#refid)
- [salesQuotationId](SalesQuotationReference.md#salesquotationid)
- [userComment](SalesQuotationReference.md#usercomment)
- [fields](SalesQuotationReference.md#fields)
- [runtime](SalesQuotationReference.md#runtime)
- [typeName](SalesQuotationReference.md#typename)

### Methods

- [clone](SalesQuotationReference.md#clone)
- [equals](SalesQuotationReference.md#equals)
- [fromBinary](SalesQuotationReference.md#frombinary)
- [fromJson](SalesQuotationReference.md#fromjson)
- [fromJsonString](SalesQuotationReference.md#fromjsonstring)
- [getType](SalesQuotationReference.md#gettype)
- [toBinary](SalesQuotationReference.md#tobinary)
- [toJSON](SalesQuotationReference.md#tojson)
- [toJson](SalesQuotationReference.md#tojson-1)
- [toJsonString](SalesQuotationReference.md#tojsonstring)
- [equals](SalesQuotationReference.md#equals-1)
- [fromBinary](SalesQuotationReference.md#frombinary-1)
- [fromJson](SalesQuotationReference.md#fromjson-1)
- [fromJsonString](SalesQuotationReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationReference**(`data?`): [`SalesQuotationReference`](SalesQuotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationReference`](SalesQuotationReference.md)\> |

#### Returns

[`SalesQuotationReference`](SalesQuotationReference.md)

#### Overrides

Message\&lt;SalesQuotationReference\&gt;.constructor

#### Defined in

src/sales_quotations.scailo_pb.ts:2484

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_quotations.scailo_pb.ts:2440

___

### context

• **context**: [`SALES_QUOTATION_REFERENCE_CONTEXT`](../enums/SALES_QUOTATION_REFERENCE_CONTEXT.md) = `SALES_QUOTATION_REFERENCE_CONTEXT.SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED`

The reference context, could be billing or buying

**`Generated`**

from field: Scailo.SALES_QUOTATION_REFERENCE_CONTEXT context = 11;

#### Defined in

src/sales_quotations.scailo_pb.ts:2468

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_quotations.scailo_pb.ts:2426

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales quotation

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_quotations.scailo_pb.ts:2433

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_quotations.scailo_pb.ts:2447

___

### refFrom

• **refFrom**: [`SALES_QUOTATION_REFERENCE_REF_FROM`](../enums/SALES_QUOTATION_REFERENCE_REF_FROM.md) = `SALES_QUOTATION_REFERENCE_REF_FROM.SALES_QUOTATION_REFERENCE_REF_FROM_ANY_UNSPECIFIED`

The associated ref from

**`Generated`**

from field: Scailo.SALES_QUOTATION_REFERENCE_REF_FROM ref_from = 12;

#### Defined in

src/sales_quotations.scailo_pb.ts:2475

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/sales_quotations.scailo_pb.ts:2482

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

Stores the sales quotation ID

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

src/sales_quotations.scailo_pb.ts:2461

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_quotations.scailo_pb.ts:2454

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_quotations.scailo_pb.ts:2491

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_quotations.scailo_pb.ts:2489

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationReference"``

#### Defined in

src/sales_quotations.scailo_pb.ts:2490

## Methods

### clone

▸ **clone**(): [`SalesQuotationReference`](SalesQuotationReference.md)

Create a deep copy.

#### Returns

[`SalesQuotationReference`](SalesQuotationReference.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationReference`](SalesQuotationReference.md) \| `PlainMessage`\<[`SalesQuotationReference`](SalesQuotationReference.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationReference`](SalesQuotationReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationReference`](SalesQuotationReference.md)\>

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
| `a` | `undefined` \| [`SalesQuotationReference`](SalesQuotationReference.md) \| `PlainMessage`\<[`SalesQuotationReference`](SalesQuotationReference.md)\> |
| `b` | `undefined` \| [`SalesQuotationReference`](SalesQuotationReference.md) \| `PlainMessage`\<[`SalesQuotationReference`](SalesQuotationReference.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_quotations.scailo_pb.ts:2515

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationReference`](SalesQuotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationReference`](SalesQuotationReference.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2503

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationReference`](SalesQuotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationReference`](SalesQuotationReference.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2507

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationReference`](SalesQuotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationReference`](SalesQuotationReference.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2511
