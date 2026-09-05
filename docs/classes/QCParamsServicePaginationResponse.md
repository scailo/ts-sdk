[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParamsServicePaginationResponse

# Class: QCParamsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.QCParamsServicePaginationResponse

## Hierarchy

- `Message`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\>

  ↳ **`QCParamsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QCParamsServicePaginationResponse.md#constructor)

### Properties

- [count](QCParamsServicePaginationResponse.md#count)
- [offset](QCParamsServicePaginationResponse.md#offset)
- [payload](QCParamsServicePaginationResponse.md#payload)
- [total](QCParamsServicePaginationResponse.md#total)
- [fields](QCParamsServicePaginationResponse.md#fields)
- [runtime](QCParamsServicePaginationResponse.md#runtime)
- [typeName](QCParamsServicePaginationResponse.md#typename)

### Methods

- [clone](QCParamsServicePaginationResponse.md#clone)
- [equals](QCParamsServicePaginationResponse.md#equals)
- [fromBinary](QCParamsServicePaginationResponse.md#frombinary)
- [fromJson](QCParamsServicePaginationResponse.md#fromjson)
- [fromJsonString](QCParamsServicePaginationResponse.md#fromjsonstring)
- [getType](QCParamsServicePaginationResponse.md#gettype)
- [toBinary](QCParamsServicePaginationResponse.md#tobinary)
- [toJSON](QCParamsServicePaginationResponse.md#tojson)
- [toJson](QCParamsServicePaginationResponse.md#tojson-1)
- [toJsonString](QCParamsServicePaginationResponse.md#tojsonstring)
- [equals](QCParamsServicePaginationResponse.md#equals-1)
- [fromBinary](QCParamsServicePaginationResponse.md#frombinary-1)
- [fromJson](QCParamsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QCParamsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServicePaginationResponse**(`data?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Overrides

Message\&lt;QCParamsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/qc_params.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L606)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/qc_params.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L576)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/qc_params.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L586)

___

### payload

• **payload**: [`QCParam`](QCParam.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QCParam payload = 4;

#### Defined in

[src/qc_params.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L604)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/qc_params.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L596)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L613)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L611)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParamsServicePaginationResponse"``

#### Defined in

[src/qc_params.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L612)

## Methods

### clone

▸ **clone**(): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md) \| `PlainMessage`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md) \| `PlainMessage`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md) \| `PlainMessage`\<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L632)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Defined in

[src/qc_params.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L620)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Defined in

[src/qc_params.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L624)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Defined in

[src/qc_params.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_params.scailo_pb.ts#L628)
