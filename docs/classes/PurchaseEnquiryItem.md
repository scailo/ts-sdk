[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseEnquiryItem

# Class: PurchaseEnquiryItem

Describes the parameters that constitute an item associated to a purchase enquiry

**`Generated`**

from message Scailo.PurchaseEnquiryItem

## Hierarchy

- `Message`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\>

  ↳ **`PurchaseEnquiryItem`**

## Table of contents

### Constructors

- [constructor](PurchaseEnquiryItem.md#constructor)

### Properties

- [approvalMetadata](PurchaseEnquiryItem.md#approvalmetadata)
- [description](PurchaseEnquiryItem.md#description)
- [entityUuid](PurchaseEnquiryItem.md#entityuuid)
- [metadata](PurchaseEnquiryItem.md#metadata)
- [name](PurchaseEnquiryItem.md#name)
- [needApproval](PurchaseEnquiryItem.md#needapproval)
- [purchaseEnquiryId](PurchaseEnquiryItem.md#purchaseenquiryid)
- [quantity](PurchaseEnquiryItem.md#quantity)
- [requiredBy](PurchaseEnquiryItem.md#requiredby)
- [uomId](PurchaseEnquiryItem.md#uomid)
- [userComment](PurchaseEnquiryItem.md#usercomment)
- [fields](PurchaseEnquiryItem.md#fields)
- [runtime](PurchaseEnquiryItem.md#runtime)
- [typeName](PurchaseEnquiryItem.md#typename)

### Methods

- [clone](PurchaseEnquiryItem.md#clone)
- [equals](PurchaseEnquiryItem.md#equals)
- [fromBinary](PurchaseEnquiryItem.md#frombinary)
- [fromJson](PurchaseEnquiryItem.md#fromjson)
- [fromJsonString](PurchaseEnquiryItem.md#fromjsonstring)
- [getType](PurchaseEnquiryItem.md#gettype)
- [toBinary](PurchaseEnquiryItem.md#tobinary)
- [toJSON](PurchaseEnquiryItem.md#tojson)
- [toJson](PurchaseEnquiryItem.md#tojson-1)
- [toJsonString](PurchaseEnquiryItem.md#tojsonstring)
- [equals](PurchaseEnquiryItem.md#equals-1)
- [fromBinary](PurchaseEnquiryItem.md#frombinary-1)
- [fromJson](PurchaseEnquiryItem.md#fromjson-1)
- [fromJsonString](PurchaseEnquiryItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseEnquiryItem**(`data?`): [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\> |

#### Returns

[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Overrides

Message\&lt;PurchaseEnquiryItem\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L810)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L752)

___

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 19;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L808)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L738)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase enquiry

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L745)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L780)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L759)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

Stores the purchase enquiry ID

**`Generated`**

from field: uint64 purchase_enquiry_id = 10;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L773)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L787)

___

### requiredBy

• **requiredBy**: `string` = `""`

The required by date

**`Generated`**

from field: string required_by = 18;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L801)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L794)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L766)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L817)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L815)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseEnquiryItem"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L816)

## Methods

### clone

▸ **clone**(): [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

Create a deep copy.

#### Returns

[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md) \| `PlainMessage`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\>

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
| `a` | `undefined` \| [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md) \| `PlainMessage`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\> |
| `b` | `undefined` \| [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md) \| `PlainMessage`\<[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L843)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L831)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L835)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L839)
