[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryItem

# Class: SalesEnquiryItem

Describes the parameters that constitute an item associated to a sales enquiry

**`Generated`**

from message Scailo.SalesEnquiryItem

## Hierarchy

- `Message`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

  ↳ **`SalesEnquiryItem`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryItem.md#constructor)

### Properties

- [approvalMetadata](SalesEnquiryItem.md#approvalmetadata)
- [deliveryDate](SalesEnquiryItem.md#deliverydate)
- [discount](SalesEnquiryItem.md#discount)
- [discountedUnitPrice](SalesEnquiryItem.md#discountedunitprice)
- [entityUuid](SalesEnquiryItem.md#entityuuid)
- [internalQuantity](SalesEnquiryItem.md#internalquantity)
- [metadata](SalesEnquiryItem.md#metadata)
- [name](SalesEnquiryItem.md#name)
- [needApproval](SalesEnquiryItem.md#needapproval)
- [roundOff](SalesEnquiryItem.md#roundoff)
- [salesEnquiryId](SalesEnquiryItem.md#salesenquiryid)
- [specifications](SalesEnquiryItem.md#specifications)
- [taxGroupId](SalesEnquiryItem.md#taxgroupid)
- [unitPrice](SalesEnquiryItem.md#unitprice)
- [uomId](SalesEnquiryItem.md#uomid)
- [userComment](SalesEnquiryItem.md#usercomment)
- [fields](SalesEnquiryItem.md#fields)
- [runtime](SalesEnquiryItem.md#runtime)
- [typeName](SalesEnquiryItem.md#typename)

### Methods

- [clone](SalesEnquiryItem.md#clone)
- [equals](SalesEnquiryItem.md#equals)
- [fromBinary](SalesEnquiryItem.md#frombinary)
- [fromJson](SalesEnquiryItem.md#fromjson)
- [fromJsonString](SalesEnquiryItem.md#fromjsonstring)
- [getType](SalesEnquiryItem.md#gettype)
- [toBinary](SalesEnquiryItem.md#tobinary)
- [toJSON](SalesEnquiryItem.md#tojson)
- [toJson](SalesEnquiryItem.md#tojson-1)
- [toJsonString](SalesEnquiryItem.md#tojsonstring)
- [equals](SalesEnquiryItem.md#equals-1)
- [fromBinary](SalesEnquiryItem.md#frombinary-1)
- [fromJson](SalesEnquiryItem.md#fromjson-1)
- [fromJsonString](SalesEnquiryItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryItem**(`data?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Overrides

Message\&lt;SalesEnquiryItem\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1242)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1148)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1226)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1205)

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

Stores the unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1240)

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

[src/sales_enquiries.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1132)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity being offered (in cents)

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1184)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1140](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1140)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1177)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1156)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off (in cents)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1219)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1170)

___

### specifications

• **specifications**: `string` = `""`

The specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1233)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1212)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price

**`Generated`**

from field: uint64 unit_price = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1198)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1191)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1163)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1249](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1249)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1247)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryItem"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1248)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryItem`](SalesEnquiryItem.md)

Create a deep copy.

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |
| `b` | `undefined` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`\<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1280](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1280)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1268)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1272)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_enquiries.scailo_pb.ts#L1276)
