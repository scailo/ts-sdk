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

src/sales_enquiries.scailo_pb.ts:1167

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1074

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1151

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 15;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1130

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

Stores the unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1165

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1060

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity being offered (in cents)

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1109

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales enquiry

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1067

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1102

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1081

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off (in cents)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1144

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1095

___

### specifications

• **specifications**: `string` = `""`

The specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1158

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1137

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price

**`Generated`**

from field: uint64 unit_price = 14;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1123

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1116

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1088

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1174

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1172

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryItem"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:1173

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

src/sales_enquiries.scailo_pb.ts:1205

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

src/sales_enquiries.scailo_pb.ts:1193

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

src/sales_enquiries.scailo_pb.ts:1197

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

src/sales_enquiries.scailo_pb.ts:1201
