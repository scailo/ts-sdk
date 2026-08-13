[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationRequestItem

# Class: QuotationRequestItem

Describes the parameters that constitute an item associated to a quotation request

**`Generated`**

from message Scailo.QuotationRequestItem

## Hierarchy

- `Message`\<[`QuotationRequestItem`](QuotationRequestItem.md)\>

  ↳ **`QuotationRequestItem`**

## Table of contents

### Constructors

- [constructor](QuotationRequestItem.md#constructor)

### Properties

- [approvalMetadata](QuotationRequestItem.md#approvalmetadata)
- [baselinePrice](QuotationRequestItem.md#baselineprice)
- [deliveryDate](QuotationRequestItem.md#deliverydate)
- [entityUuid](QuotationRequestItem.md#entityuuid)
- [hsnSacCode](QuotationRequestItem.md#hsnsaccode)
- [metadata](QuotationRequestItem.md#metadata)
- [name](QuotationRequestItem.md#name)
- [needApproval](QuotationRequestItem.md#needapproval)
- [quantity](QuotationRequestItem.md#quantity)
- [quotationRequestId](QuotationRequestItem.md#quotationrequestid)
- [specifications](QuotationRequestItem.md#specifications)
- [uomId](QuotationRequestItem.md#uomid)
- [userComment](QuotationRequestItem.md#usercomment)
- [vaultFolderId](QuotationRequestItem.md#vaultfolderid)
- [fields](QuotationRequestItem.md#fields)
- [runtime](QuotationRequestItem.md#runtime)
- [typeName](QuotationRequestItem.md#typename)

### Methods

- [clone](QuotationRequestItem.md#clone)
- [equals](QuotationRequestItem.md#equals)
- [fromBinary](QuotationRequestItem.md#frombinary)
- [fromJson](QuotationRequestItem.md#fromjson)
- [fromJsonString](QuotationRequestItem.md#fromjsonstring)
- [getType](QuotationRequestItem.md#gettype)
- [toBinary](QuotationRequestItem.md#tobinary)
- [toJSON](QuotationRequestItem.md#tojson)
- [toJson](QuotationRequestItem.md#tojson-1)
- [toJsonString](QuotationRequestItem.md#tojsonstring)
- [equals](QuotationRequestItem.md#equals-1)
- [fromBinary](QuotationRequestItem.md#frombinary-1)
- [fromJson](QuotationRequestItem.md#fromjson-1)
- [fromJsonString](QuotationRequestItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequestItem**(`data?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationRequestItem`](QuotationRequestItem.md)\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Overrides

Message\&lt;QuotationRequestItem\&gt;.constructor

#### Defined in

[src/quotations_requests.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1252)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1165](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1165)

___

### baselinePrice

• **baselinePrice**: `bigint` = `protoInt64.zero`

The min price (in cents)

**`Generated`**

from field: uint64 baseline_price = 13;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1222)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1243)

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

[src/quotations_requests.scailo_pb.ts:1149](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1149)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 12;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1215)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1157)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1208)

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

[src/quotations_requests.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1177)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: uint64 quantity = 14;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1229)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

Stores the quotation request ID

**`Generated`**

from field: uint64 quotation_request_id = 10;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1201)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1250)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 15;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1236)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1184)

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

[src/quotations_requests.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1194)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1259)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1257)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationRequestItem"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:1258](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1258)

## Methods

### clone

▸ **clone**(): [`QuotationRequestItem`](QuotationRequestItem.md)

Create a deep copy.

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequestItem`](QuotationRequestItem.md) \| `PlainMessage`\<[`QuotationRequestItem`](QuotationRequestItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationRequestItem`](QuotationRequestItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationRequestItem`](QuotationRequestItem.md)\>

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
| `a` | `undefined` \| [`QuotationRequestItem`](QuotationRequestItem.md) \| `PlainMessage`\<[`QuotationRequestItem`](QuotationRequestItem.md)\> |
| `b` | `undefined` \| [`QuotationRequestItem`](QuotationRequestItem.md) \| `PlainMessage`\<[`QuotationRequestItem`](QuotationRequestItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1288)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1276)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1280](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1280)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1284)
