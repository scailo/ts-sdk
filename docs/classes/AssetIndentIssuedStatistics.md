[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentIssuedStatistics

# Class: AssetIndentIssuedStatistics

Describes the issued statistics of the asset indent

**`Generated`**

from message Scailo.AssetIndentIssuedStatistics

## Hierarchy

- `Message`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\>

  ↳ **`AssetIndentIssuedStatistics`**

## Table of contents

### Constructors

- [constructor](AssetIndentIssuedStatistics.md#constructor)

### Properties

- [approvedIssuedQuantity](AssetIndentIssuedStatistics.md#approvedissuedquantity)
- [familyId](AssetIndentIssuedStatistics.md#familyid)
- [indentedQuantity](AssetIndentIssuedStatistics.md#indentedquantity)
- [unapprovedIssuedQuantity](AssetIndentIssuedStatistics.md#unapprovedissuedquantity)
- [fields](AssetIndentIssuedStatistics.md#fields)
- [runtime](AssetIndentIssuedStatistics.md#runtime)
- [typeName](AssetIndentIssuedStatistics.md#typename)

### Methods

- [clone](AssetIndentIssuedStatistics.md#clone)
- [equals](AssetIndentIssuedStatistics.md#equals)
- [fromBinary](AssetIndentIssuedStatistics.md#frombinary)
- [fromJson](AssetIndentIssuedStatistics.md#fromjson)
- [fromJsonString](AssetIndentIssuedStatistics.md#fromjsonstring)
- [getType](AssetIndentIssuedStatistics.md#gettype)
- [toBinary](AssetIndentIssuedStatistics.md#tobinary)
- [toJSON](AssetIndentIssuedStatistics.md#tojson)
- [toJson](AssetIndentIssuedStatistics.md#tojson-1)
- [toJsonString](AssetIndentIssuedStatistics.md#tojsonstring)
- [equals](AssetIndentIssuedStatistics.md#equals-1)
- [fromBinary](AssetIndentIssuedStatistics.md#frombinary-1)
- [fromJson](AssetIndentIssuedStatistics.md#fromjson-1)
- [fromJsonString](AssetIndentIssuedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentIssuedStatistics**(`data?`): [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\> |

#### Returns

[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Overrides

Message\&lt;AssetIndentIssuedStatistics\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1889)

## Properties

### approvedIssuedQuantity

• **approvedIssuedQuantity**: `bigint` = `protoInt64.zero`

Stores the approved issued quantity

**`Generated`**

from field: uint64 approved_issued_quantity = 4;

#### Defined in

[src/asset_indents.scailo_pb.ts:1887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1887)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/asset_indents.scailo_pb.ts:1866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1866)

___

### indentedQuantity

• **indentedQuantity**: `bigint` = `protoInt64.zero`

Stores the indented quantity

**`Generated`**

from field: uint64 indented_quantity = 2;

#### Defined in

[src/asset_indents.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1873)

___

### unapprovedIssuedQuantity

• **unapprovedIssuedQuantity**: `bigint` = `protoInt64.zero`

Stores the unapproved issued quantity

**`Generated`**

from field: uint64 unapproved_issued_quantity = 3;

#### Defined in

[src/asset_indents.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1880)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:1896](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1896)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:1894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1894)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentIssuedStatistics"``

#### Defined in

[src/asset_indents.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1895)

## Methods

### clone

▸ **clone**(): [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

Create a deep copy.

#### Returns

[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md) \| `PlainMessage`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\>

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
| `a` | `undefined` \| [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md) \| `PlainMessage`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\> |
| `b` | `undefined` \| [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md) \| `PlainMessage`\<[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:1915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1915)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1903)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1907)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentIssuedStatistics`](AssetIndentIssuedStatistics.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1911)
