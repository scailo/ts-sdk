[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServicePaginationResponse

# Class: ProductionPlansServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ProductionPlansServicePaginationResponse

## Hierarchy

- `Message`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\>

  ↳ **`ProductionPlansServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServicePaginationResponse.md#constructor)

### Properties

- [count](ProductionPlansServicePaginationResponse.md#count)
- [offset](ProductionPlansServicePaginationResponse.md#offset)
- [payload](ProductionPlansServicePaginationResponse.md#payload)
- [total](ProductionPlansServicePaginationResponse.md#total)
- [fields](ProductionPlansServicePaginationResponse.md#fields)
- [runtime](ProductionPlansServicePaginationResponse.md#runtime)
- [typeName](ProductionPlansServicePaginationResponse.md#typename)

### Methods

- [clone](ProductionPlansServicePaginationResponse.md#clone)
- [equals](ProductionPlansServicePaginationResponse.md#equals)
- [fromBinary](ProductionPlansServicePaginationResponse.md#frombinary)
- [fromJson](ProductionPlansServicePaginationResponse.md#fromjson)
- [fromJsonString](ProductionPlansServicePaginationResponse.md#fromjsonstring)
- [getType](ProductionPlansServicePaginationResponse.md#gettype)
- [toBinary](ProductionPlansServicePaginationResponse.md#tobinary)
- [toJSON](ProductionPlansServicePaginationResponse.md#tojson)
- [toJson](ProductionPlansServicePaginationResponse.md#tojson-1)
- [toJsonString](ProductionPlansServicePaginationResponse.md#tojsonstring)
- [equals](ProductionPlansServicePaginationResponse.md#equals-1)
- [fromBinary](ProductionPlansServicePaginationResponse.md#frombinary-1)
- [fromJson](ProductionPlansServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ProductionPlansServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServicePaginationResponse**(`data?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Overrides

Message\&lt;ProductionPlansServicePaginationResponse\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:1556](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1556)

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

[src/production_plans.scailo_pb.ts:1526](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1526)

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

[src/production_plans.scailo_pb.ts:1536](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1536)

___

### payload

• **payload**: [`ProductionPlan`](ProductionPlan.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.ProductionPlan payload = 4;

#### Defined in

[src/production_plans.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1554)

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

[src/production_plans.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1546)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1563)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:1561](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1561)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServicePaginationResponse"``

#### Defined in

[src/production_plans.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1562)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md) \| `PlainMessage`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md) \| `PlainMessage`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md) \| `PlainMessage`\<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1582)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1570)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1574)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Defined in

[src/production_plans.scailo_pb.ts:1578](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/production_plans.scailo_pb.ts#L1578)
