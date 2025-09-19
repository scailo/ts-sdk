[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationSalesBundleItem

# Class: EquationSalesBundleItem

Describes the parameters that constitute an item associated to a equation sales bundle

**`Generated`**

from message Scailo.EquationSalesBundleItem

## Hierarchy

- `Message`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\>

  ↳ **`EquationSalesBundleItem`**

## Table of contents

### Constructors

- [constructor](EquationSalesBundleItem.md#constructor)

### Properties

- [approvalMetadata](EquationSalesBundleItem.md#approvalmetadata)
- [entityUuid](EquationSalesBundleItem.md#entityuuid)
- [equationId](EquationSalesBundleItem.md#equationid)
- [familyId](EquationSalesBundleItem.md#familyid)
- [metadata](EquationSalesBundleItem.md#metadata)
- [needApproval](EquationSalesBundleItem.md#needapproval)
- [quantity](EquationSalesBundleItem.md#quantity)
- [specifications](EquationSalesBundleItem.md#specifications)
- [unitPrice](EquationSalesBundleItem.md#unitprice)
- [userComment](EquationSalesBundleItem.md#usercomment)
- [fields](EquationSalesBundleItem.md#fields)
- [runtime](EquationSalesBundleItem.md#runtime)
- [typeName](EquationSalesBundleItem.md#typename)

### Methods

- [clone](EquationSalesBundleItem.md#clone)
- [equals](EquationSalesBundleItem.md#equals)
- [fromBinary](EquationSalesBundleItem.md#frombinary)
- [fromJson](EquationSalesBundleItem.md#fromjson)
- [fromJsonString](EquationSalesBundleItem.md#fromjsonstring)
- [getType](EquationSalesBundleItem.md#gettype)
- [toBinary](EquationSalesBundleItem.md#tobinary)
- [toJSON](EquationSalesBundleItem.md#tojson)
- [toJson](EquationSalesBundleItem.md#tojson-1)
- [toJsonString](EquationSalesBundleItem.md#tojsonstring)
- [equals](EquationSalesBundleItem.md#equals-1)
- [fromBinary](EquationSalesBundleItem.md#frombinary-1)
- [fromJson](EquationSalesBundleItem.md#fromjson-1)
- [fromJsonString](EquationSalesBundleItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationSalesBundleItem**(`data?`): [`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\> |

#### Returns

[`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Overrides

Message\&lt;EquationSalesBundleItem\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L738)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L687)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L673)

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation sales bundle

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L708)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:715](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L715)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equation sales bundle

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L680)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L694)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:722](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L722)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:736](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L736)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L729)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L701)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L745)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L743)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationSalesBundleItem"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L744)

## Methods

### clone

▸ **clone**(): [`EquationSalesBundleItem`](EquationSalesBundleItem.md)

Create a deep copy.

#### Returns

[`EquationSalesBundleItem`](EquationSalesBundleItem.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationSalesBundleItem`](EquationSalesBundleItem.md) \| `PlainMessage`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\>

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
| `a` | `undefined` \| [`EquationSalesBundleItem`](EquationSalesBundleItem.md) \| `PlainMessage`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\> |
| `b` | `undefined` \| [`EquationSalesBundleItem`](EquationSalesBundleItem.md) \| `PlainMessage`\<[`EquationSalesBundleItem`](EquationSalesBundleItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L770)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L758)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L762)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItem`](EquationSalesBundleItem.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L766)
