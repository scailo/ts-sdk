[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceipt

# Class: GoodsReceipt

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.GoodsReceipt

## Hierarchy

- `Message`\<[`GoodsReceipt`](GoodsReceipt.md)\>

  ↳ **`GoodsReceipt`**

## Table of contents

### Constructors

- [constructor](GoodsReceipt.md#constructor)

### Properties

- [approvalMetadata](GoodsReceipt.md#approvalmetadata)
- [completedOn](GoodsReceipt.md#completedon)
- [entityUuid](GoodsReceipt.md#entityuuid)
- [finalRefNumber](GoodsReceipt.md#finalrefnumber)
- [formData](GoodsReceipt.md#formdata)
- [list](GoodsReceipt.md#list)
- [logs](GoodsReceipt.md#logs)
- [metadata](GoodsReceipt.md#metadata)
- [refFrom](GoodsReceipt.md#reffrom)
- [refId](GoodsReceipt.md#refid)
- [referenceId](GoodsReceipt.md#referenceid)
- [status](GoodsReceipt.md#status)
- [vaultFolderId](GoodsReceipt.md#vaultfolderid)
- [vendorBillDate](GoodsReceipt.md#vendorbilldate)
- [vendorBillNo](GoodsReceipt.md#vendorbillno)
- [fields](GoodsReceipt.md#fields)
- [runtime](GoodsReceipt.md#runtime)
- [typeName](GoodsReceipt.md#typename)

### Methods

- [clone](GoodsReceipt.md#clone)
- [equals](GoodsReceipt.md#equals)
- [fromBinary](GoodsReceipt.md#frombinary)
- [fromJson](GoodsReceipt.md#fromjson)
- [fromJsonString](GoodsReceipt.md#fromjsonstring)
- [getType](GoodsReceipt.md#gettype)
- [toBinary](GoodsReceipt.md#tobinary)
- [toJSON](GoodsReceipt.md#tojson)
- [toJson](GoodsReceipt.md#tojson-1)
- [toJsonString](GoodsReceipt.md#tojsonstring)
- [equals](GoodsReceipt.md#equals-1)
- [fromBinary](GoodsReceipt.md#frombinary-1)
- [fromJson](GoodsReceipt.md#fromjson-1)
- [fromJsonString](GoodsReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceipt**(`data?`): [`GoodsReceipt`](GoodsReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceipt`](GoodsReceipt.md)\> |

#### Returns

[`GoodsReceipt`](GoodsReceipt.md)

#### Overrides

Message\&lt;GoodsReceipt\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L826)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goods_receipts.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L725)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/goods_receipts.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L751)

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

[src/goods_receipts.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L709)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/goods_receipts.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L781)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/goods_receipts.scailo_pb.ts:824](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L824)

___

### list

• **list**: [`GoodsReceiptItem`](GoodsReceiptItem.md)[] = `[]`

The list of associated goods receipt items

**`Generated`**

from field: repeated Scailo.GoodsReceiptItem list = 20;

#### Defined in

[src/goods_receipts.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L816)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/goods_receipts.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L741)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/goods_receipts.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L717)

___

### refFrom

• **refFrom**: [`GOODS_RECEIPT_REF_FROM`](../enums/GOODS_RECEIPT_REF_FROM.md) = `GOODS_RECEIPT_REF_FROM.GOODS_RECEIPT_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 12;

#### Defined in

[src/goods_receipts.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L788)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/goods_receipts.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L795)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/goods_receipts.scailo_pb.ts:771](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L771)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/goods_receipts.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L733)

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

[src/goods_receipts.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L761)

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 15;

#### Defined in

[src/goods_receipts.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L809)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 14;

#### Defined in

[src/goods_receipts.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L802)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L833)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L831)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceipt"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L832)

## Methods

### clone

▸ **clone**(): [`GoodsReceipt`](GoodsReceipt.md)

Create a deep copy.

#### Returns

[`GoodsReceipt`](GoodsReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceipt`](GoodsReceipt.md) \| `PlainMessage`\<[`GoodsReceipt`](GoodsReceipt.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceipt`](GoodsReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceipt`](GoodsReceipt.md)\>

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
| `a` | `undefined` \| [`GoodsReceipt`](GoodsReceipt.md) \| `PlainMessage`\<[`GoodsReceipt`](GoodsReceipt.md)\> |
| `b` | `undefined` \| [`GoodsReceipt`](GoodsReceipt.md) \| `PlainMessage`\<[`GoodsReceipt`](GoodsReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L863)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceipt`](GoodsReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceipt`](GoodsReceipt.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L851)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceipt`](GoodsReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceipt`](GoodsReceipt.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L855)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceipt`](GoodsReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceipt`](GoodsReceipt.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L859)
