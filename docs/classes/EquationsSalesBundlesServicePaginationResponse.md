[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServicePaginationResponse

# Class: EquationsSalesBundlesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.EquationsSalesBundlesServicePaginationResponse

## Hierarchy

- `Message`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\>

  ↳ **`EquationsSalesBundlesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServicePaginationResponse.md#constructor)

### Properties

- [count](EquationsSalesBundlesServicePaginationResponse.md#count)
- [offset](EquationsSalesBundlesServicePaginationResponse.md#offset)
- [payload](EquationsSalesBundlesServicePaginationResponse.md#payload)
- [total](EquationsSalesBundlesServicePaginationResponse.md#total)
- [fields](EquationsSalesBundlesServicePaginationResponse.md#fields)
- [runtime](EquationsSalesBundlesServicePaginationResponse.md#runtime)
- [typeName](EquationsSalesBundlesServicePaginationResponse.md#typename)

### Methods

- [clone](EquationsSalesBundlesServicePaginationResponse.md#clone)
- [equals](EquationsSalesBundlesServicePaginationResponse.md#equals)
- [fromBinary](EquationsSalesBundlesServicePaginationResponse.md#frombinary)
- [fromJson](EquationsSalesBundlesServicePaginationResponse.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServicePaginationResponse.md#fromjsonstring)
- [getType](EquationsSalesBundlesServicePaginationResponse.md#gettype)
- [toBinary](EquationsSalesBundlesServicePaginationResponse.md#tobinary)
- [toJSON](EquationsSalesBundlesServicePaginationResponse.md#tojson)
- [toJson](EquationsSalesBundlesServicePaginationResponse.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServicePaginationResponse.md#tojsonstring)
- [equals](EquationsSalesBundlesServicePaginationResponse.md#equals-1)
- [fromBinary](EquationsSalesBundlesServicePaginationResponse.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServicePaginationResponse**(`data?`): [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\> |

#### Returns

[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Overrides

Message\&lt;EquationsSalesBundlesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1238)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1215)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1222)

___

### payload

• **payload**: [`EquationSalesBundle`](EquationSalesBundle.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.EquationSalesBundle payload = 4;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1236)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1229)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1245)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1243)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesServicePaginationResponse"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1244)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1264)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1252)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1256)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginationResponse`](EquationsSalesBundlesServicePaginationResponse.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_sales_bundles.scailo_pb.ts#L1260)
