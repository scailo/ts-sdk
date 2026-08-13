[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationResponseItem

# Class: QuotationResponseItem

Describes the parameters that constitute an item associated to a quotation response

**`Generated`**

from message Scailo.QuotationResponseItem

## Hierarchy

- `Message`\<[`QuotationResponseItem`](QuotationResponseItem.md)\>

  ↳ **`QuotationResponseItem`**

## Table of contents

### Constructors

- [constructor](QuotationResponseItem.md#constructor)

### Properties

- [approvalMetadata](QuotationResponseItem.md#approvalmetadata)
- [deliveryTimeInDays](QuotationResponseItem.md#deliverytimeindays)
- [entityUuid](QuotationResponseItem.md#entityuuid)
- [hsnSacCode](QuotationResponseItem.md#hsnsaccode)
- [internalQuantity](QuotationResponseItem.md#internalquantity)
- [metadata](QuotationResponseItem.md#metadata)
- [name](QuotationResponseItem.md#name)
- [needApproval](QuotationResponseItem.md#needapproval)
- [quotationRequestItemId](QuotationResponseItem.md#quotationrequestitemid)
- [quotationResponseId](QuotationResponseItem.md#quotationresponseid)
- [specifications](QuotationResponseItem.md#specifications)
- [taxGroupId](QuotationResponseItem.md#taxgroupid)
- [uomId](QuotationResponseItem.md#uomid)
- [userComment](QuotationResponseItem.md#usercomment)
- [vaultFolderId](QuotationResponseItem.md#vaultfolderid)
- [vendorQuantity](QuotationResponseItem.md#vendorquantity)
- [vendorUnitPrice](QuotationResponseItem.md#vendorunitprice)
- [vendorUomId](QuotationResponseItem.md#vendoruomid)
- [fields](QuotationResponseItem.md#fields)
- [runtime](QuotationResponseItem.md#runtime)
- [typeName](QuotationResponseItem.md#typename)

### Methods

- [clone](QuotationResponseItem.md#clone)
- [equals](QuotationResponseItem.md#equals)
- [fromBinary](QuotationResponseItem.md#frombinary)
- [fromJson](QuotationResponseItem.md#fromjson)
- [fromJsonString](QuotationResponseItem.md#fromjsonstring)
- [getType](QuotationResponseItem.md#gettype)
- [toBinary](QuotationResponseItem.md#tobinary)
- [toJSON](QuotationResponseItem.md#tojson)
- [toJson](QuotationResponseItem.md#tojson-1)
- [toJsonString](QuotationResponseItem.md#tojsonstring)
- [equals](QuotationResponseItem.md#equals-1)
- [fromBinary](QuotationResponseItem.md#frombinary-1)
- [fromJson](QuotationResponseItem.md#fromjson-1)
- [fromJsonString](QuotationResponseItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponseItem**(`data?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationResponseItem`](QuotationResponseItem.md)\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Overrides

Message\&lt;QuotationResponseItem\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1229)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1114)

___

### deliveryTimeInDays

• **deliveryTimeInDays**: `bigint` = `protoInt64.zero`

The delivery time in days (in cents)

**`Generated`**

from field: uint64 delivery_time_in_days = 20;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1220)

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

[src/quotations_responses.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1098)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 13;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1171)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The internal quantity offered (in cents)

**`Generated`**

from field: uint64 internal_quantity = 15;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1185)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1106)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 12;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1164)

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

[src/quotations_responses.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1126)

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: uint64 quotation_request_item_id = 11;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1157)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: uint64 quotation_response_id = 10;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1150)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1227)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: uint64 tax_group_id = 19;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1213)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: uint64 uom_id = 14;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1178)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1133)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1143)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

The quantity offered in vendor's unit of material (in cents)

**`Generated`**

from field: uint64 vendor_quantity = 17;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1199)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price per vendor's unit of material

**`Generated`**

from field: uint64 vendor_unit_price = 18;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1206)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 16;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1192)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1236)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1234)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationResponseItem"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1235)

## Methods

### clone

▸ **clone**(): [`QuotationResponseItem`](QuotationResponseItem.md)

Create a deep copy.

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponseItem`](QuotationResponseItem.md) \| `PlainMessage`\<[`QuotationResponseItem`](QuotationResponseItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationResponseItem`](QuotationResponseItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationResponseItem`](QuotationResponseItem.md)\>

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
| `a` | `undefined` \| [`QuotationResponseItem`](QuotationResponseItem.md) \| `PlainMessage`\<[`QuotationResponseItem`](QuotationResponseItem.md)\> |
| `b` | `undefined` \| [`QuotationResponseItem`](QuotationResponseItem.md) \| `PlainMessage`\<[`QuotationResponseItem`](QuotationResponseItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1269)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1257)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1261)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L1265)
